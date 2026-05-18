import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Problem }
from '../../services/problem';

@Component({
  selector:
    'app-edit-problem',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:
    './edit-problem.html',

  styleUrl:
    './edit-problem.scss',
})
export class EditProblem {

  fb =
    inject(FormBuilder);

  problemService =
    inject(Problem);

  selectedProblem =
    this.problemService
      .selectedProblem();

  form =
    this.fb.group({

      title: [
        this.selectedProblem?.title || '',
        Validators.required
      ],

      description: [
        this.selectedProblem?.description || ''
      ],

      priority: [
        this.selectedProblem?.priority || ''
      ],

      status: [
        this.selectedProblem?.status || ''
      ],

      assignedTo: [
        this.selectedProblem?.assignedTo || ''
      ],

      rootCause: [
        this.selectedProblem?.rootCause || ''
      ],

      workaround: [
        this.selectedProblem?.workaround || ''
      ],

      permanentFix: [
        this.selectedProblem?.permanentFix || ''
      ]

    });

  closeModal() {

    this.problemService
      .showEditModal
      .set(false);

  }

  updateProblem() {

    if (
      this.form.invalid
    ) return;

    const updated =

      this.problemService
        .problems()
        .map(problem => {

          if (

            problem.id ===
            this.selectedProblem?.id

          ) {

          return {

  ...problem,

  title:
    this.form.value.title || '',

  description:
    this.form.value.description || '',

  priority:
    this.form.value.priority || '',

  status:
    this.form.value.status as
      | 'Open'
      | 'Root Cause Analysis'
      | 'Known Error'
      | 'Resolved',

  assignedTo:
    this.form.value.assignedTo || '',

  rootCause:
    this.form.value.rootCause || '',

  workaround:
    this.form.value.workaround || '',

  permanentFix:
    this.form.value.permanentFix || ''

};

          }

          return problem;

        });

    this.problemService
      .problems
      .set(updated);

    this.closeModal();

  }

}