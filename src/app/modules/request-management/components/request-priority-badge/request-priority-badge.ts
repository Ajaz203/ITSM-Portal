import {
  Component,
  input
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

@Component({
  selector:
    'app-request-priority-badge',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './request-priority-badge.html',

  styleUrls: [
    './request-priority-badge.scss'
  ]

})
export class RequestPriorityBadge {

  priority =
    input<string>();

}