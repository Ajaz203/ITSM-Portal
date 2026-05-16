import {
  Injectable,
  inject
} from '@angular/core';

import {
  ToastrService
} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toastr =
    inject(ToastrService);

  // SUCCESS

  success(message: string) {

    this.toastr.success(
      message,
      'Success'
    );

  }

  // ERROR

  error(message: string) {

    this.toastr.error(
      message,
      'Error'
    );

  }

  // WARNING

  warning(message: string) {

    this.toastr.warning(
      message,
      'Warning'
    );

  }

  // INFO

  info(message: string) {

    this.toastr.info(
      message,
      'Info'
    );

  }

}