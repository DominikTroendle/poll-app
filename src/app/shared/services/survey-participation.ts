import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SurveyParticipation {
  private readonly storageKey = 'poll-app:completed-survey-ids';

  getCompletedSurveyIds(): number[] {
    const storedIds = localStorage.getItem(this.storageKey);
    return storedIds ? JSON.parse(storedIds) : [];
  }

  hasCompletedSurvey(surveyId: number): boolean {
    const completedSurveyIds = this.getCompletedSurveyIds();
    return completedSurveyIds.includes(surveyId);
  }

  markSurveyAsCompleted(surveyId: number): void {
    const completedSurveyIds = this.getCompletedSurveyIds();
    if (completedSurveyIds.includes(surveyId)) return;
    completedSurveyIds.push(surveyId);
    localStorage.setItem(this.storageKey, JSON.stringify(completedSurveyIds));
  }
}
