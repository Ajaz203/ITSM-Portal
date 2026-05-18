import {
  Injectable,
  computed,
  inject
} from '@angular/core';

import { IncidentService }
from '../../modules/incident-management/services/incident.service';
import { Asset }
from '../../modules/asset-management/services/asset';

@Injectable({
  providedIn: 'root'
})
export class Analytics {

  incidentService =
    inject(IncidentService);

 assetService =
  inject(Asset);

  totalIncidents =
    computed(() =>

      this.incidentService
        .incidents()
        .length

    );

  // OPEN INCIDENTS

  openIncidents =
    computed(() =>

      this.incidentService
        .incidents()
        .filter(

          item =>
            item.status ===
            'Open'

        ).length

    );

  // RESOLVED INCIDENTS

  resolvedIncidents =
    computed(() =>

      this.incidentService
        .incidents()
        .filter(

          item =>
            item.status ===
            'Resolved'

        ).length

    );

  // SLA BREACHES

  slaBreaches =
    computed(() =>

      this.incidentService
        .incidents()
        .filter(

          item =>
            item.slaStatus ===
            'breached'

        ).length

    );
activeAssets =
  computed(() =>

    this.assetService
      .assets()
      .filter(

        item =>
          item.status ===
          'Active'

      ).length

  );
  // PRIORITY ANALYTICS

  priorityData =
    computed(() => {

      const incidents =

        this.incidentService
          .incidents();

      return [

        incidents.filter(

          item =>
            item.priority ===
            'Low'

        ).length,

        incidents.filter(

          item =>
            item.priority ===
            'Medium'

        ).length,

        incidents.filter(

          item =>
            item.priority ===
            'High'

        ).length,

        incidents.filter(

          item =>
            item.priority ===
            'Critical'

        ).length

      ];

    });

  // STATUS ANALYTICS

  statusData =
    computed(() => {

      const incidents =

        this.incidentService
          .incidents();

      return [

        incidents.filter(

          item =>
            item.status ===
            'Open'

        ).length,

        incidents.filter(

          item =>
            item.status ===
            'In Progress'

        ).length,

        incidents.filter(

          item =>
            item.status ===
            'Resolved'

        ).length,

        incidents.filter(

          item =>
            item.status ===
            'Closed'

        ).length

      ];

    });
assetCategoryData =
  computed(() => {

    const assets =

      this.assetService
        .assets();

    return [

      assets.filter(

        item =>
          item.category ===
          'Laptop'

      ).length,

      assets.filter(

        item =>
          item.category ===
          'Desktop'

      ).length,

      assets.filter(

        item =>
          item.category ===
          'Server'

      ).length,

      assets.filter(

        item =>
          item.category ===
          'Network Device'

      ).length

    ];

  });
}