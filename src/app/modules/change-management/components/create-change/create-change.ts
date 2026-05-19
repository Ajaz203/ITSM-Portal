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

import { ChangeService }
from '../../services/change';

@Component({
  selector:
    'app-create-change',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:
    './create-change.html',

  styleUrl:
    './create-change.scss',
})
export class CreateChange {

  fb =
    inject(FormBuilder);

  changeService =
    inject(ChangeService);

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

      type: [
        'Normal'
      ],

      risk: [
        'Medium'
      ],

      assignedTo: [
        ''
      ],

      plannedStart: [
        ''
      ],

      plannedEnd: [
        ''
      ],

      implementationPlan: [
        ''
      ],

      rollbackPlan: [
        ''
      ]

    });

  closeModal() {

    this.changeService
      .showCreateModal
      .set(false);

  }

  submit() {

    if (
      this.form.invalid
    ) return;

    const current =

      this.changeService
        .changes();

    const newChange = {

      id:
        current.length + 1,

      changeId:
        `CHG00${current.length + 1}`,

      title:
        this.form.value.title || '',

      description:
        this.form.value.description || '',

      type:
        this.form.value.type as
          | 'Normal'
          | 'Emergency'
          | 'Standard',

      risk:
        this.form.value.risk as
          | 'Low'
          | 'Medium'
          | 'High',

      status:
        'Pending' as const,

      assignedTo:
        this.form.value.assignedTo || '',

      implementationPlan:
        this.form.value.implementationPlan || '',

      rollbackPlan:
        this.form.value.rollbackPlan || '',

      plannedStart:
        this.form.value.plannedStart || '',

      plannedEnd:
        this.form.value.plannedEnd || '',

      approvalStatus:
        'Pending' as const,

      approvalComment:
        '',

      approvedBy:
        '',

      createdAt:
        new Date()
          .toISOString()

    };

    this.changeService
      .changes
      .set([

        newChange,

        ...current

      ]);

    this.closeModal();

    this.form.reset();

  }

}