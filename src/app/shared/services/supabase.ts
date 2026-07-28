import { Injectable, signal } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import {
  AnsweredQuestion,
  CommittedResults,
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

  async setSurveyResult(surveyId: number, submittedResults: AnsweredQuestion[]) {
    const { error } = await this.supabase.from('survey_responses').insert({ survey_id: surveyId });
    if (error) {
      console.error(error);
      return;
    }
  }
}
