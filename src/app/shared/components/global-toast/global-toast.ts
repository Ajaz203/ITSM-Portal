import {
  Component,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  ToastService
} from '../../../core/services/toast';

@Component({

  selector:
    'app-global-toast',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './global-toast.html',

  styleUrls: [
    './global-toast.scss'
  ]

})

export class GlobalToast {

  toastService =
    inject(ToastService);

}