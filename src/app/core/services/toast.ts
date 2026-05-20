import {
  Injectable,
  signal
} from '@angular/core';

export interface ToastMessage {

  message: string;

  type:
    'success'
    | 'error'
    | 'warning'
    | 'info';

}

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  /* TOAST STATE */

  toast =
    signal<ToastMessage | null>(
      null
    );

  /* MAIN METHOD */

  show(

    message: string,

    type:
      'success'
      | 'error'
      | 'warning'
      | 'info' = 'info'

  ) {

    this.toast.set({

      message,
      type

    });

    /* AUTO HIDE */

    setTimeout(() => {

      this.toast.set(null);

    }, 3000);

  }

  /* SUCCESS */

  success(
    message: string
  ) {

    this.show(
      message,
      'success'
    );

  }

  /* ERROR */

  error(
    message: string
  ) {

    this.show(
      message,
      'error'
    );

  }

  /* WARNING */

  warning(
    message: string
  ) {

    this.show(
      message,
      'warning'
    );

  }

  /* INFO */

  info(
    message: string
  ) {

    this.show(
      message,
      'info'
    );

  }

}