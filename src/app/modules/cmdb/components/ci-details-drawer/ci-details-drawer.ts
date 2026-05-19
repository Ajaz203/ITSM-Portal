import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { Cmdb }
from '../../services/cmdb';

@Component({
  selector:
    'app-ci-details-drawer',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './ci-details-drawer.html',

  styleUrl:
    './ci-details-drawer.scss',
})
export class CiDetailsDrawer {

  cmdbService =
    inject(Cmdb);

}