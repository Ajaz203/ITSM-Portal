import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { ChangeService }
from '../../services/change';

@Component({
  selector:
    'app-change-details-drawer',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './change-details-drawer.html',

  styleUrl:
    './change-details-drawer.scss',
})
export class ChangeDetailsDrawer {

  changeService =
    inject(ChangeService);

}