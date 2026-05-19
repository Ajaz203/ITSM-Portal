import {
  Injectable,
  computed,
  signal
} from '@angular/core';

import {
  Change
} from '../interfaces/change.interface';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {

  search =
    signal('');

  selectedChange =
    signal<Change | null>(
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

  changes =
    signal<Change[]>([

      {

        id: 1,

        changeId:
          'CHG001',

        title:
          'Production DB Upgrade',

        description:
          'Upgrade production database cluster',

        type:
          'Normal',

        risk:
          'High',

        status:
          'Pending',

        assignedTo:
          'DBA Team',

        rollbackPlan:
          'Restore DB snapshot',

        implementationPlan:
          'Upgrade DB nodes sequentially',

        plannedStart:
          '2026-05-20',

        plannedEnd:
          '2026-05-21',

        approvalStatus:
          'Pending',

        approvalComment:
          '',

        approvedBy:
          '',

        createdAt:
          '2026-05-17'

      }

    ]);

  filteredChanges =
    computed(() => {

      const keyword =

        this.search()
          .toLowerCase();

      return this.changes()
        .filter(item =>

          item.title
            .toLowerCase()
            .includes(keyword)

        );

    });

  openDetails(
    change: Change
  ) {

    this.selectedChange
      .set(change);

    this.showDetailsDrawer
      .set(true);

  }

  openEditModal(
    change: Change
  ) {

    this.selectedChange
      .set(change);

    this.showEditModal
      .set(true);

  }

  openDeleteModal(
    change: Change
  ) {

    this.selectedChange
      .set(change);

    this.showDeleteModal
      .set(true);

  }

}