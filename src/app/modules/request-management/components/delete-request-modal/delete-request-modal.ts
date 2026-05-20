import {
  Component,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  RequestService
} from '../../services/request';

@Component({
  selector:
    'app-delete-request-modal',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './delete-request-modal.html',

  styleUrls: [
    './delete-request-modal.scss'
  ]

})
export class DeleteRequestModal {

  requestService =
    inject(RequestService);

  /* CLOSE */

  closeModal() {

    this.requestService
      .showDeleteModal
      .set(false);

  }

  /* DELETE */

  deleteRequest() {

    const current =

      this.requestService
        .selectedRequest();

    if (!current) {
      return;
    }

    this.requestService
      .requests
      .update(items =>

        items.filter(item =>

          item.id !== current.id

        )

      );

    this.closeModal();

  }

}