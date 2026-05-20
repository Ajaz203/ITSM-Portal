export const sidebarMenu = [

  /* MAIN */

  {

    section: 'MAIN',

    menus: [

      {

        title: 'Dashboard',

        icon: 'bi bi-grid-1x2',

        route: '/dashboard',

        permission:
          'Dashboard'

      }

    ]

  },

  /* SERVICE MANAGEMENT */

  {

    section:
      'SERVICE MANAGEMENT',

    menus: [

      {

        title:
          'Incident Management',

        icon:
          'bi bi-exclamation-circle',

        route:
          '/incident-management',

        permission:
          'Tickets'

      },

      {

        title:
          'Request Management',

        icon:
          'bi bi-card-checklist',

        route:
          '/request-management',

        permission:
          'Dashboard'

      },

      {

        title:
          'Problem Management',

        icon:
          'bi bi-question-circle',

        route:
          '/problem-management',

        permission:
          'Dashboard'

      },

      {

        title:
          'Change Management',

        icon:
          'bi bi-arrow-repeat',

        route:
          '/change-management',

        permission:
          'Dashboard'

      },

      {

        title:
          'Approval Board',

        icon:
          'bi bi-check2-square',

        route:
          '/change-approval-board',

        permission:
          'Dashboard'

      },

      {

        title:
          'Change Calendar',

        icon:
          'bi bi-calendar-event',

        route:
          '/change-calendar',

        permission:
          'Dashboard'

      },

      {

        title:
          'Change Analytics',

        icon:
          'bi bi-bar-chart-line',

        route:
          '/change-analytics',

        permission:
          'Dashboard'

      },

      {

        title:
          'Asset Management',

        icon:
          'bi bi-pc-display',

        route:
          '/assets-management',

        permission:
          'assetTracking'

      },

      {

        title:
          'CMDB',

        icon:
          'bi bi-diagram-2',

        route:
          '/cmdb',

        permission:
          'Dashboard'

      },

      {

        title:
          'Relationship Map',

        icon:
          'bi bi-diagram-3',

        route:
          '/relationship-map',

        permission:
          'Dashboard'

      },

      {

        title:
          'Vendors',

        icon:
          'bi bi-buildings',

        route:
          '/vendors',

        permission:
          'Dashboard'

      }

    ]

  },

  /* REPORTS */

  {

    section:
      'REPORTS & ANALYTICS',

    menus: [

      {

        title:
          'Reports',

        icon:
          'bi bi-bar-chart',

        route:
          '/reports-dashboard',

        permission:
          'Dashboard'

      },

      {
        title: 'Export center',

        icon: 'bi bi-file-earmark-arrow-up',
        route: '/export-center',
        permission: 'Dashboard'
      },

      {

        title:
          'Analytics',

        icon:
          'bi bi-pie-chart',

        route:
          '/analytics',

        permission:
          'Dashboard'

      },

      {

        title:
          'SLA Monitoring',

        icon:
          'bi bi-clock-history',

        route:
          '/sla-reports',

        permission:
          'Dashboard'

      },

      {

        title:
          'Audit Logs',

        icon:
          'bi bi-journal-text',

        route:
          '/audit-logs',

        permission:
          'Dashboard'

      }

    ]

  },

  /* ADMINISTRATION */

  {

    section:
      'ADMINISTRATION',

    menus: [

      {

        title:
          'Users',

        icon:
          'bi bi-people',

        route:
          '/users',

        permission:
          'Dashboard'

      },

      {

        title:
          'Departments',

        icon:
          'bi bi-diagram-3',

        route:
          '/departments',

        permission:
          'Dashboard'

      },

      {

        title:
          'Settings',

        icon:
          'bi bi-gear',

        route:
          '/settings',

        permission:
          'Dashboard'

      }

    ]

  }

];