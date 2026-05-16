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

      }

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

        route: '/reports',

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
          '/sla-monitoring',

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

        title: 'Assets',

        icon:
          'bi bi-pc-display',

        route:
          '/assets',

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