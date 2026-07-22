import { Injectable, signal } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { SurveyMetaData, SurveyWithQuestions, AnswerOptionResult } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  supabaseUrl = 'https://ejrqzxvqbqlwupmkpnnc.supabase.co';
  supabaseKey = 'sb_publishable_yplhzWQKpzSXMqWXJ638YA_bXmsnyzj';
  supabase = createClient(this.supabaseUrl, this.supabaseKey);

  surveys = signal<SurveyMetaData[]>([]);
  committedResults = signal<AnswerOptionResult[]>([]);

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
        answer_options (id, question_id, answer)
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

  async getCommittedResults(surveyID: number): Promise<void> {
    this.committedResults.set([]);
    const { data: liveResults, error } = await this.supabase
      .from('surveys')
      .select('questions (answer_options (id, question_id, selection_count))')
      .eq('id', surveyID)
      .single();
    if (error) {
      console.error('Supabase error: ', error);
      return;
    }
    const result = liveResults.questions.flatMap((question) => question.answer_options);
    this.committedResults.set(result);
  }
}
