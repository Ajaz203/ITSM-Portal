import {
  Component,
  input
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

@Component({
  selector:
    'app-request-status-badge',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './request-status-badge.html',

  styleUrls: [
    './request-status-badge.scss'
  ]

})
export class RequestStatusBadge {

  status =
    input<string>();

}