import {
  Injectable,
  signal,
  computed
} from '@angular/core';

import {
  AuditLog
} from '../interfaces/audit-log.interface';

@Injectable({
  providedIn: 'root'
})
export class AuditLogs {

  search =
    signal('');

  logs =
    signal<AuditLog[]>([

      {

        id: 1,

        module:
          'Incident',

        action:
          'Deleted Incident',

        performedBy:
          'Admin',

        createdAt:
          '2026-05-19 10:20 AM',

        severity:
          'High',

        description:
          'Critical incident removed from system'

      },

      {

        id: 2,

        module:
          'Change',

        action:
          'Approved Change',

        performedBy:
          'Manager',

        createdAt:
          '2026-05-19 11:15 AM',

        severity:
          'Medium',

        description:
          'Production DB upgrade approved'

      },

      {

        id: 3,

        module:
          'User',

        action:
          'Role Updated',

        performedBy:
          'Super Admin',

        createdAt:
          '2026-05-19 12:30 PM',

        severity:
          'Low',

        description:
          'Agent promoted to Manager role'

      }

    ]);

  filteredLogs =
    computed(() => {

      const search =

        this.search()
          .toLowerCase();

      return this.logs()
        .filter(item =>

          item.module
            .toLowerCase()
            .includes(search)

          ||

          item.action
            .toLowerCase()
            .includes(search)

          ||

          item.performedBy
            .toLowerCase()
            .includes(search)

        );

    });

}