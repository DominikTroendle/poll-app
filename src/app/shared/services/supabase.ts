import { Injectable, signal } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import {
  AnsweredQuestion,
  CommittedResults,
  NewQuestion,
  NewSurvey,
  ResponseAnswer,
  SurveyMetaData,
  SurveyWithQuestions,
} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  supabaseUrl = 'https://ejrqzxvqbqlwupmkpnnc.supabase.co';
  supabaseKey = 'sb_publishable_yplhzWQKpzSXMqWXJ638YA_bXmsnyzj';
  supabase = createClient(this.supabaseUrl, this.supabaseKey);

  surveys = signal<SurveyMetaData[]>([]);

  async getSurveys(): Promise<void> {
    const { data: surveys, error } = await this.supabase
      .from('surveys')
      .select('*')
      .order('ends_at', { ascending: true });
    if (error) {
      console.error('Supabase error:', error);
      return;
    }
    this.surveys.set(surveys ?? []);
  }

  async getSurveyWithQuestions(surveyID: number): Promise<SurveyWithQuestions | null> {
    const { data: surveyData, error } = await this.supabase
      .from('surveys')
      .select(
        `*,
      questions (
        *,
        answer_options (*)
      )
    `,
      )
      .eq('id', surveyID)
      .single();
    if (error) {
      console.error('Supabase error:', error);
      return null;
    }
    return surveyData;
  }

  async getCommittedResults(surveyID: number): Promise<CommittedResults[]> {
    const { data: committedResults, error } = await this.supabase
      .from('survey_responses')
      .select('response_answers (answer_option_id)')
      .eq('survey_id', surveyID);
    if (error) {
      console.error('Supabase error: ', error);
      return [];
    }
    return committedResults ?? [];
  }

  async setSurveyResult(surveyId: number, submittedResults: AnsweredQuestion[]): Promise<void> {
    const { data: response, error: responseError } = await this.supabase
      .from('survey_responses')
      .insert({ survey_id: surveyId })
      .select('id')
      .single();
    if (responseError) {
      console.error(responseError);
      return;
    }
    const responseAnswers = this.createResponseAnswerRows(submittedResults, response.id);
    const { error: answersError } = await this.supabase
      .from('response_answers')
      .insert(responseAnswers);
    if (answersError) {
      console.error(answersError);
      return;
    }
  }

  createResponseAnswerRows(
    submittedResults: AnsweredQuestion[],
    responseId: number,
  ): ResponseAnswer[] {
    const answerOptionIds = submittedResults.flatMap((answer) => answer.selectedAnswerIDs);
    const responseAnswers = answerOptionIds.map((answerOptionId) => ({
      response_id: responseId,
      answer_option_id: answerOptionId,
    }));
    return responseAnswers;
  }

  async setNewSurvey(submittedSurvey: NewSurvey): Promise<number | null> {
    const surveyId = await this.insertSurvey(submittedSurvey);
    if (surveyId === null) return null;
    for (const question of submittedSurvey.questions) {
      const questionId = await this.insertQuestion(surveyId, question);
      if (questionId === null) return null;
      await this.insertAnswers(questionId, question.answers);
    }
    return surveyId;
  }

  async insertSurvey(survey: NewSurvey): Promise<number | null> {
    const surveyMetaData = {
      title: survey.title,
      description: survey.description,
      category: survey.category,
      ...(survey.endDate ? { ends_at: survey.endDate } : {}),
    };
    const { data, error } = await this.supabase
      .from('surveys')
      .insert(surveyMetaData, { defaultToNull: false })
      .select('id')
      .single();
    if (error) {
      console.error(error);
      return null;
    }
    return data.id;
  }

  async insertQuestion(surveyId: number, question: NewQuestion): Promise<number | null> {
    const surveyQuestion = {
      survey_id: surveyId,
      question: question.title,
      allow_multiple_answers: question.multiSelect,
    };
    const { data, error } = await this.supabase
      .from('questions')
      .insert(surveyQuestion)
      .select('id')
      .single();
    if (error) {
      console.error(error);
      return null;
    }
    return data.id;
  }

  async insertAnswers(questionId: number, submittedAnswers: string[]): Promise<void> {
    const answers = submittedAnswers.map((answer) => ({ question_id: questionId, answer: answer }));
    const { error } = await this.supabase.from('answer_options').insert(answers);
    if (error) {
      console.error(error);
      return;
    }
  }
}
