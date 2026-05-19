import {
  Injectable,
  computed,
  inject
} from '@angular/core';

import { IncidentService }
from '../../incident-management/services/incident.service';

import { ChangeService }
from '../../change-management/services/change';

@Injectable({
  providedIn: 'root',
})
export class Reports {

  incidentService =
    inject(IncidentService);

  changeService =
    inject(ChangeService);

  /* INCIDENT REPORTS */

  totalIncidents =
    computed(() =>

      this.incidentService
        .incidents()
        .length

    );

  openIncidents =
    computed(() =>

      this.incidentService
        .incidents()
        .filter(item =>

          item.status !==
          'Resolved'

        ).length

    );

  resolvedIncidents =
    computed(() =>

      this.incidentService
        .incidents()
        .filter(item =>

          item.status ===
          'Resolved'

        ).length

    );

  breachedSla =
    computed(() =>

      this.incidentService
        .incidents()
        .filter(item =>

          item.slaStatus ===
          'breached'

        ).length

    );

  /* CHANGE REPORTS */

  totalChanges =
    computed(() =>

      this.changeService
        .changes()
        .length

    );

  approvedChanges =
    computed(() =>

      this.changeService
        .changes()
        .filter(item =>

          item.approvalStatus
          === 'Approved'

        ).length

    );

  emergencyChanges =
    computed(() =>

      this.changeService
        .changes()
        .filter(item =>

          item.type ===
          'Emergency'

        ).length

    );
totalSlaTickets =
  computed(() =>

    this.incidentService
      .incidents()
      .filter(item =>

        item.slaHours

      ).length

  );
  /* SLA REPORTS */


healthySla =
  computed(() =>

    this.incidentService
      .incidents()
      .filter(item =>

        item.slaStatus
        === 'healthy'

      ).length

  );

warningSla =
  computed(() =>

    this.incidentService
      .incidents()
      .filter(item =>

        item.slaStatus
        === 'warning'

      ).length

  );

breachedSlaTickets =
  computed(() =>

    this.incidentService
      .incidents()
      .filter(item =>

        item.slaStatus
        === 'breached'

      ).length

  );
}