import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [

  // DEFAULT

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // LOGIN

  {
    path: 'login',
    loadComponent: () =>
      import('./modules/auth/login/login')
        .then((m) => m.Login)
  },

  // ADMIN LAYOUT

  {
    path: '',
    canActivate: [authGuard],

    loadComponent: () =>
      import('./layouts/admin-layout/admin-layout')
        .then((m) => m.AdminLayout),

    children: [

      // DASHBOARD

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./modules/dashboard/dashboard/dashboard')
            .then((m) => m.Dashboard)
      },

      // INCIDENT MANAGEMENT

      {
        path: 'incident-management',
        loadComponent: () =>
          import('./modules/incident-management/incident-list/incident-list')
            .then((m) => m.IncidentList)
      },

      // REPORTS

      {
        path: 'reports',
        loadComponent: () =>
          import('./modules/reports/incident-reports/incident-reports')
            .then((m) => m.IncidentReports)
      }

    ]
  }

];