import {
  Injectable,
  computed,
  signal
} from '@angular/core';

import { Incident } from '../interfaces/incident.interface';
import {
  STATUS_WORKFLOW
} from '../constants/incident-status';
@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  showCreateModal = signal(false);
  selectedIncident =
    signal<Incident | null>(null);

  showDetailsDrawer =
    signal(false);

  incidents = signal<Incident[]>([

    {
      id: 1,
      ticketId: 'INC001234',
      title: 'Email Server Down',
      description: 'Mail server outage issue',
      category: 'Infrastructure',
      priority: 'Critical',
      status: 'Open',
      assignedTo: 'John Doe',
      slaHours: 2,

      slaStatus: 'healthy',
      createdAt: '2026-05-15',
      comments: [

        {

          user: 'Admin',

          message:
            'Incident created',

          createdAt:
            '2026-05-15 10:30 AM',

          type: 'comment'

        }

      ],
      attachments: [],
      activities: [

    {

      user: 'Admin',

      action:
        'Incident created',

      createdAt:
        '2026-05-15 10:30 AM'

    }

  ]
    },

    {
      id: 2,
      ticketId: 'INC001235',
      title: 'VPN Connection Issue',
      description: 'VPN not connecting',
      category: 'Network',
      priority: 'Medium',
      status: 'In Progress',
      assignedTo: 'Admin User',
      slaHours: 2,

      slaStatus: 'healthy',
      createdAt: '2026-05-15',
      comments: [

        {

          user: 'Admin',

          message:
            'Incident created',

          createdAt:
            '2026-05-15 10:30 AM',

          type: 'comment'

        }

      ],
      attachments: [],
      activities: [

    {

      user: 'Admin',

      action:
        'Incident created',

      createdAt:
        '2026-05-15 10:30 AM'

    }

  ]
    },

    {
      id: 3,
      ticketId: 'INC001236',
      title: 'Database Performance',
      description: 'SQL latency issue',
      category: 'Database',
      priority: 'High',
      status: 'Resolved',
      assignedTo: 'David',
      slaHours: 2,

      slaStatus: 'healthy',
      createdAt: '2026-05-14',
      comments: [

        {

          user: 'Admin',

          message:
            'Incident created',

          createdAt:
            '2026-05-15 10:30 AM',

          type: 'comment'

        }

      ],
      attachments: [],
      activities: [

    {

      user: 'Admin',

      action:
        'Incident created',

      createdAt:
        '2026-05-15 10:30 AM'

    }

  ]


    }

  ]);

  // SEARCH

  search = signal('');

  // STATUS FILTER

  selectedStatus = signal('All');

  // FILTERED INCIDENTS

  filteredIncidents = computed(() => {

    let data = this.incidents();

    // STATUS

    if (
      this.selectedStatus() !== 'All'
    ) {

      data = data.filter(

        item =>
          item.status ===
          this.selectedStatus()

      );

    }

    // SEARCH

    if (this.search()) {

      data = data.filter(

        item =>

          item.title
            .toLowerCase()
            .includes(
              this.search().toLowerCase()
            ) ||

          item.ticketId
            .toLowerCase()
            .includes(
              this.search().toLowerCase()
            )

      );

    }

    return data;

  });
  selectedPage = signal(1);

  pageSize = 5;
  paginatedIncidents = computed(() => {

    const start =
      (this.selectedPage() - 1)
      * this.pageSize;

    const end =
      start + this.pageSize;

    return this.filteredIncidents()
      .slice(start, end);

  });
  totalPages = computed(() => {

    return Math.ceil(

      this.filteredIncidents().length
      / this.pageSize

    );

  });
  openIncidentDetails(
    incident: Incident
  ) {

    this.selectedIncident.set(
      incident
    );

    this.showDetailsDrawer.set(
      true
    );

  }
  showEditModal =
    signal(false);

  editingIncident =
    signal<Incident | null>(null);
  openEditModal(
    incident: Incident
  ) {

    this.editingIncident.set(
      incident
    );

    this.showEditModal.set(
      true
    );

  }

  showDeleteModal =
    signal(false);

  deletingIncident =
    signal<Incident | null>(null);

  openDeleteModal(
    incident: Incident
  ) {

    this.deletingIncident.set(
      incident
    );

    this.showDeleteModal.set(
      true
    );

  }
  commentText =
    signal('');
  addComment(
    type: 'comment' | 'note'
  ) {

    const incident =
      this.selectedIncident();

    if (!incident) return;

    if (!this.commentText()) return;

    const updated =
      this.incidents()
        .map(item => {

          if (
            item.id === incident.id
          ) {

            return {

              ...item,

              comments: [

                ...(item.comments || []),

                {

                  user: 'Admin',

                  message:
                    this.commentText(),

                  createdAt:
                    new Date()
                      .toLocaleString(),

                  type

                }

              ]

            };

          }

          return item;

        });

    this.incidents.set(updated);

    // UPDATE DRAWER

    const latest =
      updated.find(

        item =>
          item.id === incident.id

      );

    this.selectedIncident.set(
      latest || null
    );
this.addActivity(

  incident.id,

  type === 'note'

    ? 'Added internal note'

    : 'Added comment'

);
    // RESET

    this.commentText.set('');

  }

  uploadAttachment(
    event: Event
  ) {

    const incident =
      this.selectedIncident();

    if (!incident) return;

    const input =
      event.target as HTMLInputElement;

    if (!input.files?.length) return;

    const file =
      input.files[0];

    const updated =
      this.incidents()
        .map(item => {

          if (
            item.id === incident.id
          ) {

            return {

              ...item,

              attachments: [

                ...(item.attachments || []),

                {

                  name: file.name,

                  size:
                    (
                      file.size / 1024
                    ).toFixed(2) + ' KB',

                  type: file.type

                }

              ]

            };

          }

          return item;

        });

    this.incidents.set(updated);

    // UPDATE DRAWER

    const latest =
      updated.find(

        item =>
          item.id === incident.id

      );

    this.selectedIncident.set(
      latest || null
    );
this.addActivity(

  incident.id,

  'Uploaded attachment'

);
  }
  removeAttachment(
    index: number
  ) {

    const incident =
      this.selectedIncident();

    if (!incident) return;

    const updated =
      this.incidents()
        .map(item => {

          if (
            item.id === incident.id
          ) {

            return {

              ...item,

              attachments:
                item.attachments
                  ?.filter(

                    (_, i) =>
                      i !== index

                  ) || []

            };

          }

          return item;

        });

    this.incidents.set(updated);

    // UPDATE DRAWER

    const latest =
      updated.find(

        item =>
          item.id === incident.id

      );

    this.selectedIncident.set(
      latest || null
    );

  }
getSlaByPriority(
  priority: string
) {

  switch(priority) {

    case 'Critical':
      return 2;

    case 'High':
      return 4;

    case 'Medium':
      return 8;

    default:
      return 24;

  }

}

canChangeStatus(

  current: string,

  next: string

): boolean {

  const allowed: string[] =

    STATUS_WORKFLOW[
      current as keyof
      typeof STATUS_WORKFLOW
    ] || [];

  return allowed.includes(next);

}
addActivity(

  incidentId: number,

  action: string

) {

  const updated =
    this.incidents()
      .map(item => {

        if (
          item.id === incidentId
        ) {

          return {

            ...item,

            activities: [

              ...(item.activities || []),

              {

                user: 'Admin',

                action,

                createdAt:
                  new Date()
                    .toLocaleString()

              }

            ]

          };

        }

        return item;

      });

  this.incidents.set(updated);

  // UPDATE SELECTED

  const latest =
    updated.find(

      item =>
        item.id === incidentId

    );

  this.selectedIncident.set(
    latest || null
  );

}
}