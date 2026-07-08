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

  endingSoonSurveys = computed(() => this.supabase.surveys().slice(0, 3));
}
