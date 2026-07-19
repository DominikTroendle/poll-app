import { Component, inject, signal } from '@angular/core';
import { SurveyStatus } from '../../shared/survey-status/survey-status';
import { SurveyForm } from '../survey-form/survey-form';
import { SurveyResults } from '../survey-results/survey-results';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Supabase } from '../../shared/services/supabase';
import { SurveyWithQuestions } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-survey-view',
  imports: [SurveyStatus, SurveyForm, SurveyResults, RouterLink],
  templateUrl: './survey-view.html',
  styleUrl: './survey-view.scss',
})
export class SurveyView {
  private readonly supabase = inject(Supabase);
  private readonly route = inject(ActivatedRoute);
  readonly surveyId = Number(this.route.snapshot.paramMap.get('id'));
  currentSurvey = signal<SurveyWithQuestions | null>(null);

  async ngOnInit(): Promise<void> {
    const survey = await this.supabase.getSurveyWithQuestions(this.surveyId);
    this.currentSurvey.set(survey);
  }
}
