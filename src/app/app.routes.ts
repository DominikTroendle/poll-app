import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home').then((m) => m.Home)
    },
    {
        path: 'surveys:id',
        loadComponent: () => import('./survey/survey').then((m) => m.Survey)
    }
];
