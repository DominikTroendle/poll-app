import { Injectable, signal } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { SurveyMetaData } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  supabaseUrl = 'https://ejrqzxvqbqlwupmkpnnc.supabase.co';
  supabaseKey = 'sb_publishable_yplhzWQKpzSXMqWXJ638YA_bXmsnyzj';
  supabase = createClient(this.supabaseUrl, this.supabaseKey);

  surveys = signal<SurveyMetaData[]>([]);
}
