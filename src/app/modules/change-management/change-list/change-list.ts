import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { FormsModule }
from '@angular/forms';

import { ChangeService }
from '../services/change';

import { CreateChange }
from '../components/create-change/create-change';

import { EditChange }
from '../components/edit-change/edit-change';

import { DeleteChangeModal }
from '../components/delete-change-modal/delete-change-modal';

import { ChangeDetailsDrawer }
from '../components/change-details-drawer/change-details-drawer';

@Component({
  selector:
    'app-change-list',

  standalone: true,

  imports: [

    CommonModule,
    FormsModule,

    CreateChange,
    EditChange,
    DeleteChangeModal,
    ChangeDetailsDrawer

  ],

  templateUrl:
    './change-list.html',

  styleUrl:
    './change-list.scss',
})
export class ChangeList {

  changeService =
    inject(ChangeService);

}