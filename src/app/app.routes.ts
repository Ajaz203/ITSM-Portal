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

        path:
          'change-management',

        loadComponent: () =>

          import(
            './modules/change-management/change-list/change-list'
          ).then(

            m => m.ChangeList

          )

      },

      {

        path:
          'change-approval-board',

        loadComponent: () =>

          import(
            './modules/change-management/components/change-approval-panel/change-approval-panel'
          ).then(

            m => m.ChangeApprovalPanel

          )

      },

      {

        path:
          'change-calendar',

        loadComponent: () =>

          import(
            './modules/change-management/components/change-calendar/change-calendar'
          ).then(

            m => m.ChangeCalendar

          )

      },
      {

        path:
          'change-analytics',

        loadComponent: () =>

          import(
            './modules/change-management/components/change-analytics/change-analytics'
          ).then(

            m => m.ChangeAnalytics

          )

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

        path:
          'reports-dashboard',

        loadComponent: () =>

          import(
            './modules/reports/reports-dashboard/reports-dashboard'
          ).then(

            m => m.ReportsDashboard

          )

      },


      {
        path: 'cmdb',

        loadComponent: () =>
          import('./modules/cmdb/cmdb-list/cmdb-list')
            .then((m) => m.CmdbList)
      },
      {

        path:
          'relationship-map',

        loadComponent: () =>

          import(
            './modules/cmdb/components/relationship-map/relationship-map'
          ).then(

            m => m.RelationshipMap

          )

      },
      {

        path:
          'export-center',

        loadComponent: () =>

          import(
            './modules/reports/components/export-center/export-center'
          ).then(

            m => m.ExportCenter

          )

      },
      {
        path:
          'sla-reports',
        loadComponent: () =>
          import('./modules/reports/components/sla-reports/sla-reports')
            .then((m) => m.SlaReports)
      },
      {

  path:
    'audit-logs',

  loadComponent: () =>

    import(
      './modules/audit-logs/audit-logs-dashboard/audit-logs-dashboard'
    ).then(

      m => m.AuditLogsDashboard

    )

}

    ]
  }

];