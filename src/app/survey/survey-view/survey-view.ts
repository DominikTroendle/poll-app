import { Component, computed, inject, signal } from '@angular/core';
import { SurveyStatus } from '../../shared/survey-status/survey-status';
import { SurveyForm } from '../survey-form/survey-form';
import { SurveyResults } from '../survey-results/survey-results';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Supabase } from '../../shared/services/supabase';
import {
  AnsweredQuestion,
  CommittedResults,
  SurveyWithQuestions,
} from '../../shared/interfaces/interfaces';
import { getRemainingDays } from '../../shared/utils/survey-date';

@Component({
  selector: 'app-survey-view',
  imports: [SurveyStatus, SurveyForm, SurveyResults, RouterLink],
  templateUrl: './survey-view.html',
  styleUrl: './survey-view.scss',
})
export class SurveyView {
  private readonly supabase = inject(Supabase);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly surveyId = Number(this.route.snapshot.paramMap.get('id'));

  currentSurvey = signal<SurveyWithQuestions | null>(null);
  committedResults = signal<CommittedResults[]>([]);
  draftResults = signal<AnsweredQuestion[]>([]);

  surveyExpired = computed(() => {
    const survey = this.currentSurvey();
    if (!survey) return false;
    return getRemainingDays(survey.ends_at) < 0;
  });

  async ngOnInit(): Promise<void> {
    const survey = await this.supabase.getSurveyWithQuestions(this.surveyId);
    const results = await this.supabase.getCommittedResults(this.surveyId);
    this.currentSurvey.set(survey);
    this.committedResults.set(results);
  }

  formatDate(date: string): string {
    const [year, month, day] = date.split('-').map(Number);
    const localDate = new Date(year, month - 1, day);
    return new Intl.DateTimeFormat('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(localDate);
  }

  onAnsweredQuestionsChange(answers: AnsweredQuestion[]): void {
    this.draftResults.set(answers);
  }

  async submitSurvey(submittedResults: AnsweredQuestion[]): Promise<void> {
    await this.supabase.setSurveyResult(this.surveyId, submittedResults);
    await this.router.navigate(['/']);
  }
}
