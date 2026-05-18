import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import { Vendor } from '../services/vendor';

@Component({
  selector: 'app-vendors',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl:
    './vendors.html',

  styleUrl:
    './vendors.scss',
})
export class Vendors {

  vendorService =
    inject(Vendor);

}