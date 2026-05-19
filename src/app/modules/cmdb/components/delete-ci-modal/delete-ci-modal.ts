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
    'app-delete-ci-modal',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './delete-ci-modal.html',

  styleUrl:
    './delete-ci-modal.scss',
})
export class DeleteCiModal {

  cmdbService =
    inject(Cmdb);

  closeModal() {

    this.cmdbService
      .showDeleteModal
      .set(false);

  }

  confirmDelete() {

    const selected =

      this.cmdbService
        .selectedCI();

    if (!selected)
      return;

    const updated =

      this.cmdbService
        .cis()
        .filter(ci =>

          ci.id !==
          selected.id

        );

    this.cmdbService
      .cis
      .set(updated);

    this.closeModal();

  }

}