import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'survey/:id',
    loadComponent: () => import('./survey/survey').then((m) => m.Survey),
  },
  {
    path: 'create-survey',
    loadComponent: () => import('./create-survey/create-survey').then((m) => m.CreateSurvey),
  },
];
