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

      {
        path: 'assets-management',

        loadComponent: () =>
          import(
            './modules/asset-management/asset-list/asset-list'
          ).then(m => m.AssetList)
      },
      {
        path: 'assets/add',

        loadComponent: () =>
          import(
            './modules/asset-management/add-asset/add-asset'
          ).then(m => m.AddAsset)
      },
      {
        path: 'vendors',

        loadComponent: () =>
          import(
            './modules/asset-management/vendors/vendors'
          ).then(m => m.Vendors)
      },
      {
        path: 'problem-management',

        loadComponent: () =>

          import(
            './modules/problem-management/problem-list/problem-list'
          ).then(m => m.ProblemList)
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./modules/reports/incident-reports/incident-reports')
            .then((m) => m.IncidentReports)
      }

    ]
  }

];