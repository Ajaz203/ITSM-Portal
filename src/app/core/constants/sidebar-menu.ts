export const sidebarMenu = [

  // MAIN

  {
    section: 'MAIN',

    menus: [

      {

        title: 'Dashboard',

        icon: 'bi bi-grid-1x2',

        route: '/dashboard',

        roles: [

          'Admin',

          'Agent',

          'User'

        ]

      }

    ]

  },

  // SERVICE MANAGEMENT

  {
    section: 'SERVICE MANAGEMENT',

    menus: [

      {

        title:
          'Incident Management',

        icon:
          'bi bi-exclamation-circle',

        route:
          '/incident-management',

        roles: [

          'Admin',

          'Agent'

        ]

      },
      {

        title:
          'Request Management',

        icon:
          'bi bi-card-checklist',

        route:
          '/request-management',

        roles: [

          'Admin',

          'Agent',

          'User'

        ]

      },

      {

        title:
          'Problem Management',

        icon:
          'bi bi-question-circle',

        route:
          '/problem-management',

        roles: [

          'Admin',

          'Agent'

        ]

      },

      {

        title:
          'Change Management',

        icon:
          'bi bi-arrow-repeat',

        route:
          '/change-management',

        roles: [

          'Admin',

          'Manager'

        ]

      },

      {

        title:
          'Approval Board',

        icon:
          'bi bi-check2-square',

        route:
          '/change-approval-board',

        roles: [

          'Admin',

          'Manager'

        ]

      },

      {

        title:
          'Change Calendar',

        icon:
          'bi bi-calendar-event',

        route:
          '/change-calendar',

        roles: [

          'Admin',

          'Manager'

        ]

      },
      {

        title:
          'Change Analytics',

        icon:
          'bi bi-bar-chart-line',

        route:
          '/change-analytics',

        roles: [

          'Admin',

          'Manager'

        ]

      },
      {

        title:
          'Asset Management',

        icon:
          'bi bi-pc-display',

        route:
          '/assets-management',

        roles: [

          'Admin',

          'Agent'

        ]

      },

      {

        title:
          'CMDB',

        icon:
          'bi bi-diagram-2',

        route:
          '/cmdb',

        roles: [

          'Admin',

          'Manager'

        ]

      },
      {

        title:
          'Relationship Map',

        icon:
          'bi bi-diagram-3',

        route:
          '/relationship-map',

        roles: [

          'Admin',

          'Manager'

        ]

      },
      {
        title: 'Vendors',

        icon: 'bi bi-buildings',

        route: '/vendors',

        roles: [
          'Admin'
        ]

      },

    ]

  },

  // REPORTS

  {
    section:
      'REPORTS & ANALYTICS',

    menus: [

      {

        title: 'Reports',

        icon: 'bi bi-bar-chart',

        route: '/reports-dashboard',

        roles: [

          'Admin',

          'Manager'

        ]

      },
      {

        title:
          'Export Center',

        icon:
          'bi bi-download',

        route:
          '/export-center',

        roles: [

          'Admin',

          'Manager'

        ]

      },
      {

        title: 'Analytics',

        icon: 'bi bi-pie-chart',

        route: '/analytics',

        roles: [

          'Admin',

          'Manager'

        ]

      },

      {

        title:
          'SLA Monitoring',

        icon:
          'bi bi-clock-history',

        route:
          '/sla-reports',

        roles: [

          'Admin',

          'Manager'

        ]

      },

      {

        title: 'Audit Logs',

        icon:
          'bi bi-journal-text',

        route:
          '/audit-logs',

        roles: [

          'Admin'

        ]

      }

    ]

  },

  // ADMIN

  {
    section: 'ADMINISTRATION',

    menus: [

      {

        title: 'Users',

        icon: 'bi bi-people',

        route: '/users',

        roles: [

          'Admin'

        ]

      },

      {

        title:
          'Departments',

        icon:
          'bi bi-diagram-3',

        route:
          '/departments',

        roles: [

          'Admin'

        ]

      },



      {

        title: 'Settings',

        icon: 'bi bi-gear',

        route: '/settings',

        roles: [

          'Admin'

        ]

      }

    ]

  }

];