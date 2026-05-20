import {
  Component,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import {
  RequestService
} from '../../services/request';

@Component({
  selector:
    'app-request-filters',

  standalone: true,

  imports: [

    CommonModule,
    FormsModule

  ],

  templateUrl:
    './request-filters.html',

  styleUrls: [
    './request-filters.scss'
  ]

})
export class RequestFilters {

  requestService =
    inject(RequestService);

}