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
    'app-delete-change-modal',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './delete-change-modal.html',

  styleUrl:
    './delete-change-modal.scss',
})
export class DeleteChangeModal {

  changeService =
    inject(ChangeService);

  closeModal() {

    this.changeService
      .showDeleteModal
      .set(false);

  }

  confirmDelete() {

    const selected =

      this.changeService
        .selectedChange();

    if (!selected)
      return;

    const updated =

      this.changeService
        .changes()
        .filter(item =>

          item.id !==
          selected.id

        );

    this.changeService
      .changes
      .set(updated);

    this.closeModal();

  }

}