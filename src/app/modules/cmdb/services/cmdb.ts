import {
  Injectable,
  computed,
  signal
} from '@angular/core';

import {
  ConfigurationItem
} from '../interfaces/cmdb.interface';

@Injectable({
  providedIn: 'root'
})
export class Cmdb {

  search =
    signal('');

  selectedCI =
    signal<ConfigurationItem | null>(
      null
    );

  showCreateModal =
    signal(false);

  showEditModal =
    signal(false);

  showDeleteModal =
    signal(false);

  showDetailsDrawer =
    signal(false);

  cis =
    signal<ConfigurationItem[]>([
      {

        id: 1,

        ciId:
          'CI001',

        name:
          'Production DB Server',

        type:
          'Database',

        status:
          'Operational',

        environment:
          'Production',

        owner:
          'DBA Team',

        vendor:
          'Oracle',

        ipAddress:
          '10.0.0.12',

        operatingSystem:
          'Linux',

        linkedIncidents: [

          'INC001',
          'INC005'

        ],

        linkedProblems: [

          'PRB001'

        ],

        linkedChanges: [

          'CHG001'

        ],

        relationships: [

          'Payroll Application',
          'HR Service'

        ],

        createdAt:
          '2026-05-17'

      },

      {

        id: 2,

        ciId:
          'CI002',

        name:
          'Payroll Application',

        type:
          'Application',

        status:
          'Warning',

        environment:
          'Production',

        owner:
          'Backend Team',

        vendor:
          'SAP',

        ipAddress:
          '10.0.0.22',

        operatingSystem:
          'Windows Server',

        linkedIncidents: [

          'INC003'

        ],

        linkedProblems: [

          'PRB001'

        ],

        linkedChanges: [

          'CHG001'

        ],

        relationships: [

          'Production DB Server'

        ],

        createdAt:
          '2026-05-17'

      }

    ]);

  filteredCIs =
    computed(() => {

      const keyword =

        this.search()
          .toLowerCase();

      return this.cis()
        .filter(ci =>

          ci.name
            .toLowerCase()
            .includes(keyword)

        );

    });

  openCIDetails(
    ci: ConfigurationItem
  ) {

    this.selectedCI
      .set(ci);

    this.showDetailsDrawer
      .set(true);

  }

  openEditModal(
    ci: ConfigurationItem
  ) {

    this.selectedCI
      .set(ci);

    this.showEditModal
      .set(true);

  }

  openDeleteModal(
    ci: ConfigurationItem
  ) {

    this.selectedCI
      .set(ci);

    this.showDeleteModal
      .set(true);

  }

}