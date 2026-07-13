import { Component, computed, inject } from '@angular/core';
import { SurveyCard } from '../../shared/survey-card/survey-card';
import { RouterLink } from '@angular/router';
import { Supabase } from '../../shared/services/supabase';

@Component({
  selector: 'app-ending-soon',
  imports: [SurveyCard, RouterLink],
  templateUrl: './ending-soon.html',
  styleUrl: './ending-soon.scss',
})
export class EndingSoon {
  supabase = inject(Supabase);

  endingSoonSurveys = computed(() => {
    const today = new Date();
    const todayString = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, '0'),
      String(today.getDate()).padStart(2, '0'),
    ].join('-');
    return this.supabase
      .surveys()
      .filter((survey) => survey.ends_at >= todayString)
      .slice(0, 3);
  });
}
