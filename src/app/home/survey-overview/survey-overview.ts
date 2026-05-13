import { Component } from '@angular/core';
import { CategoryDropdown } from "../../shared/category-dropdown/category-dropdown";

@Component({
  selector: 'app-survey-overview',
  imports: [CategoryDropdown],
  templateUrl: './survey-overview.html',
  styleUrl: './survey-overview.scss',
})
export class SurveyOverview {}
