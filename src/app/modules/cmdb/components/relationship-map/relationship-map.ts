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
    'app-relationship-map',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './relationship-map.html',

  styleUrl:
    './relationship-map.scss',
})
export class RelationshipMap {

  cmdbService =
    inject(Cmdb);

}