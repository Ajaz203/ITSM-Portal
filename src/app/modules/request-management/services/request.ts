import {
  Injectable,
  signal,
  computed
} from '@angular/core';

import {
  ServiceRequest
} from '../interfaces/request.interface';

@Injectable({
  providedIn: 'root',
})
export class RequestService {

  /* SEARCH */

  search =
    signal('');

  /* SELECTED REQUEST */

  selectedRequest =
    signal<ServiceRequest | null>(
      null
    );

  /* MODALS */

  showCreateModal =
    signal(false);

  showEditModal =
    signal(false);

  showDeleteModal =
    signal(false);

  showDetailsDrawer =
    signal(false);

  /* REQUEST DATA */

  requests =
    signal<ServiceRequest[]>([

      {

        id: 1,

        requestId:
          'REQ-1001',

        title:
          'Laptop Request',

        description:
          'Need Dell laptop for onboarding',

        category:
          'Hardware',

        priority:
          'High',

        status:
          'Pending',

        requestedBy:
          'John Doe',

        assignedTo:
          'IT Support',

        createdAt:
          '2026-05-19',

        slaHours:
          24

      },

      {

        id: 2,

        requestId:
          'REQ-1002',

        title:
          'VPN Access',

        description:
          'Need VPN access for remote work',

        category:
          'Access',

        priority:
          'Medium',

        status:
          'Approved',

        requestedBy:
          'Sarah',

        assignedTo:
          'Network Team',

        createdAt:
          '2026-05-20',

        slaHours:
          8

      }

    ]);

  /* FILTERED */

  filteredRequests =
    computed(() => {

      const search =

        this.search()
          .toLowerCase();

      return this.requests()
        .filter(item =>

          item.title
            .toLowerCase()
            .includes(search)

          ||

          item.requestId
            .toLowerCase()
            .includes(search)

          ||

          item.category
            .toLowerCase()
            .includes(search)

        );

    });

  /* DETAILS */

  openDetails(
    item: ServiceRequest
  ) {

    this.selectedRequest
      .set(item);

    this.showDetailsDrawer
      .set(true);

  }

  /* EDIT */

  openEditModal(
    item: ServiceRequest
  ) {

    this.selectedRequest
      .set(item);

    this.showEditModal
      .set(true);

  }

  /* DELETE */

  openDeleteModal(
    item: ServiceRequest
  ) {

    this.selectedRequest
      .set(item);

    this.showDeleteModal
      .set(true);

  }
/* APPROVE */

approveRequest(
  id: number,

  approvedBy: string,

  comment: string
) {

  this.requests.update(
    items =>

      items.map(item =>

        item.id === id

          ? {

              ...item,

              status:
                'Approved',

              approvalBy:
                approvedBy,

              approvalComment:
                comment

            }

          : item

      )

  );

}

/* REJECT */

rejectRequest(
  id: number,

  approvedBy: string,

  comment: string
) {

  this.requests.update(
    items =>

      items.map(item =>

        item.id === id

          ? {

              ...item,

              status:
                'Rejected',

              approvalBy:
                approvedBy,

              approvalComment:
                comment

            }

          : item

      )

  );

}
}