import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { FormsModule }
from '@angular/forms';

import { ChangeService }
from '../../services/change';

@Component({
  selector:
    'app-change-approval-panel',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl:
    './change-approval-panel.html',

  styleUrl:
    './change-approval-panel.scss',
})
export class ChangeApprovalPanel {

  changeService =
    inject(ChangeService);

  comment = '';

  approveChange(id: number) {

    const updated =

      this.changeService
        .changes()
        .map(change => {

          if (
            change.id === id
          ) {

            return {

              ...change,

              approvalStatus:
                'Approved' as const,

              status:
                'Approved' as const,

              approvalComment:
                this.comment,

              approvedBy:
                'CAB Manager'

            };

          }

          return change;

        });

    this.changeService
      .changes
      .set(updated);

    this.comment = '';

  }

  rejectChange(id: number) {

    const updated =

      this.changeService
        .changes()
        .map(change => {

          if (
            change.id === id
          ) {

            return {

              ...change,

              approvalStatus:
                'Rejected' as const,

              status:
                'Rejected' as const,

              approvalComment:
                this.comment,

              approvedBy:
                'CAB Manager'

            };

          }

          return change;

        });

    this.changeService
      .changes
      .set(updated);

    this.comment = '';

  }

}