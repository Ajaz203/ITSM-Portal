import {
  Component,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  Loader
} from '../../../core/services/loader';

@Component({
  selector:
    'app-global-loader',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './global-loader.html',

  styleUrls: [
    './global-loader.scss'
  ]

})

export class GlobalLoader {

  loader =
    inject(Loader);

}