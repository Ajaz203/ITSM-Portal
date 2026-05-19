import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { FormsModule }
from '@angular/forms';

import { Cmdb }
from '../services/cmdb';
import {
  CreateCi
} from '../components/create-ci/create-ci';
import {
  CiDetailsDrawer
} from '../components/ci-details-drawer/ci-details-drawer';
import {
  EditCi
} from '../components/edit-ci/edit-ci';
import {
  DeleteCiModal
} from '../components/delete-ci-modal/delete-ci-modal';

@Component({
  selector:
    'app-cmdb-list',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    CreateCi,
    CiDetailsDrawer,
    EditCi,
    DeleteCiModal
  ],

  templateUrl:
    './cmdb-list.html',

  styleUrl:
    './cmdb-list.scss',
})
export class CmdbList {

  cmdbService =
    inject(Cmdb);

}