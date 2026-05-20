import {
  Component,
  inject,
  signal
} from '@angular/core';
import {HostListener} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  RequestService
} from '../../services/request';

import {
  RequestStatusBadge
} from '../request-status-badge/request-status-badge';

import {
  RequestPriorityBadge
} from '../request-priority-badge/request-priority-badge';

@Component({
  selector:
    'app-request-table',

  standalone: true,

  imports: [

    CommonModule,

    RequestStatusBadge,
    RequestPriorityBadge

  ],

  templateUrl:
    './request-table.html',

  styleUrls: [
    './request-table.scss'
  ]

})
export class RequestTable {

  requestService =
    inject(RequestService);

  activeMenu =
    signal<number | null>(
      null
    );

toggleMenu(

  id: number,

  event: Event

) {

  event.stopPropagation();

  this.activeMenu.set(

    this.activeMenu() === id
      ? null
      : id

  );

}
@HostListener(
  'document:click'
)

closeDropdown() {

  this.activeMenu.set(null);

}
/* APPROVE */

approve(item: any) {

  this.requestService
    .approveRequest(

      item.id,

      'Manager',

      'Request approved'

    );

}

/* REJECT */

reject(item: any) {

  this.requestService
    .rejectRequest(

      item.id,

      'Manager',

      'Request rejected'

    );

}
}