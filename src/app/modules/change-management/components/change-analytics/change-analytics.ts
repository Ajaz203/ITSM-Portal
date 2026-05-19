import {
  Component,
  computed,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { ChangeService }
from '../../services/change';

@Component({
  selector:
    'app-change-analytics',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './change-analytics.html',

  styleUrl:
    './change-analytics.scss',
})
export class ChangeAnalytics {

  changeService =
    inject(ChangeService);

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

  rejectedChanges =
    computed(() =>

      this.changeService
        .changes()
        .filter(item =>

          item.approvalStatus
          === 'Rejected'

        ).length

    );

  emergencyChanges =
    computed(() =>

      this.changeService
        .changes()
        .filter(item =>

          item.type
          === 'Emergency'

        ).length

    );

  pendingChanges =
    computed(() =>

      this.changeService
        .changes()
        .filter(item =>

          item.approvalStatus
          === 'Pending'

        ).length

    );

}