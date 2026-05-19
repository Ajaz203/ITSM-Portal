import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { ChangeService }
from '../../services/change';

import { EditChange }
from '../edit-change/edit-change';

@Component({
  selector:
    'app-change-calendar',

  standalone: true,

  imports: [

    CommonModule,
    EditChange

  ],

  templateUrl:
    './change-calendar.html',

  styleUrl:
    './change-calendar.scss',
})
export class ChangeCalendar {

  changeService =
    inject(ChangeService);

}