import {
  Component,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import { RequestService } from '../services/request';

import { RequestFilters } from '../components/request-filters/request-filters'; 

import { RequestTable }
from '../components/request-table/request-table';

import { CreateRequest }
from '../create-request/create-request';

import { EditRequest }
from '../components/edit-request/edit-request';

import { DeleteRequestModal }
from '../components/delete-request-modal/delete-request-modal';

import { RequestDetailsDrawer }
from '../components/request-details-drawer/request-details-drawer';

@Component({
  selector:
    'app-request-list',

  standalone: true,

  imports: [

    CommonModule,

    RequestFilters,
    RequestTable,

    CreateRequest,
    EditRequest,

    DeleteRequestModal,
    RequestDetailsDrawer

  ],

  templateUrl:
    './request-list.html',

  styleUrl:
    './request-list.scss',
})
export class RequestList {

  requestService =
    inject(RequestService);

}