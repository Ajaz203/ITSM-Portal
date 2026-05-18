import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { Problem }
from '../../services/problem';

@Component({
  selector:
    'app-delete-problem-modal',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './delete-problem-modal.html',

  styleUrl:
    './delete-problem-modal.scss',
})
export class DeleteProblemModal {

  problemService =
    inject(Problem);

  closeModal() {

    this.problemService
      .showDeleteModal
      .set(false);

  }

  confirmDelete() {

    const selected =

      this.problemService
        .selectedProblem();

    if (!selected)
      return;

    const updated =

      this.problemService
        .problems()
        .filter(problem =>

          problem.id !==
          selected.id

        );

    this.problemService
      .problems
      .set(updated);

    this.closeModal();

  }

}