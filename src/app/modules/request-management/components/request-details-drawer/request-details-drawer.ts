import {
  Component,
  inject
} from '@angular/core';

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
    'app-request-details-drawer',

  standalone: true,

  imports: [

    CommonModule,

    RequestStatusBadge,
    RequestPriorityBadge

  ],

  templateUrl:
    './request-details-drawer.html',

  styleUrls: [
    './request-details-drawer.scss'
  ]

})
export class RequestDetailsDrawer {

  requestService =
    inject(RequestService);

  /* CLOSE */

  closeDrawer() {

    this.requestService
      .showDetailsDrawer
      .set(false);

  }

}