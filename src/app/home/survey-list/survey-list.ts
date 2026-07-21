import { Component, computed, inject, input } from '@angular/core';
import { SurveyListItem } from '../../shared/survey-list-item/survey-list-item';
import { Supabase } from '../../shared/services/supabase';
import { Category, SurveyMetaData } from '../../shared/interfaces/interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-survey-list',
  imports: [SurveyListItem, RouterLink],
  templateUrl: './survey-list.html',
  styleUrl: './survey-list.scss',
})
export class SurveyList {
  supabase = inject(Supabase);
  displayActiveSurveys = input<boolean>(true);
  selectedCategory = input<Category | null>(null);

  activeSurveys = computed(() => this.filterSurveys('active'));
  pastSurveys = computed(() => this.filterSurveys('past'));

  filterSurveys(status: string): SurveyMetaData[] {
    const today = new Date();
    const todayString = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, '0'),
      String(today.getDate()).padStart(2, '0'),
    ].join('-');
    return this.supabase.surveys().filter((survey) => {
      const matchesStatus =
        status === 'active' ? survey.ends_at >= todayString : survey.ends_at < todayString;
      const matchesCategory =
        !this.selectedCategory() || survey.category.trim() === this.selectedCategory()?.trim();
      return matchesStatus && matchesCategory;
    });
  }
}
