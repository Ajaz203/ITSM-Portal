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
import { IncidentService }
  from '../../../incident-management/services/incident.service';

@Component({
  selector:
    'app-create-problem',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:
    './create-problem.html',

  styleUrl:
    './create-problem.scss',
})
export class CreateProblem {

  fb =
    inject(FormBuilder);

  problemService =
    inject(Problem);

  incidentService =
    inject(IncidentService);

  form =
    this.fb.group({

      title: [
        '',
        Validators.required
      ],

      description: [
        '',
        Validators.required
      ],

      priority: [
        '',
        Validators.required
      ],

      assignedTo: [
        '',
        Validators.required
      ],

      rootCause: [''],

      workaround: [''],
      linkedIncidents: [[]]

    });

  closeModal() {

    this.problemService
      .showCreateModal
      .set(false);

  }

  submit() {

    if (
      this.form.invalid
    ) {

      this.form
        .markAllAsTouched();

      return;

    }

    const current =

      this.problemService
        .problems();

    this.problemService
      .problems
      .set([

        {

          id:
            current.length + 1,

          problemId:
            'PRB00' +
            (current.length + 1),

          title:
            this.form.value.title || '',

          description:
            this.form.value.description || '',

          priority:
            this.form.value.priority || '',

          status:
            'Open',

          rootCause:
            this.form.value.rootCause || '',

          workaround:
            this.form.value.workaround || '',

          permanentFix:
            '',

         linkedIncidents:

  this.form.value
    .linkedIncidents || [],

          assignedTo:
            this.form.value.assignedTo || '',

          createdAt:
            new Date()
              .toISOString()
              .split('T')[0]

        },

        ...current

      ]);

    this.closeModal();

    this.form.reset();

  }

}