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
    'app-edit-change',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:
    './edit-change.html',

  styleUrl:
    './edit-change.scss',
})
export class EditChange {

  fb =
    inject(FormBuilder);

  changeService =
    inject(ChangeService);

  selectedChange =
    this.changeService
      .selectedChange();

  form =
    this.fb.group({

      title: [
        this.selectedChange
          ?.title || '',
        Validators.required
      ],

      description: [
        this.selectedChange
          ?.description || ''
      ],

      type: [
        this.selectedChange
          ?.type || 'Normal'
      ],

      risk: [
        this.selectedChange
          ?.risk || 'Medium'
      ],

      assignedTo: [
        this.selectedChange
          ?.assignedTo || ''
      ],

      plannedStart: [
        this.selectedChange
          ?.plannedStart || ''
      ],

      plannedEnd: [
        this.selectedChange
          ?.plannedEnd || ''
      ],

      implementationPlan: [
        this.selectedChange
          ?.implementationPlan || ''
      ],

      rollbackPlan: [
        this.selectedChange
          ?.rollbackPlan || ''
      ]

    });

  closeModal() {

    this.changeService
      .showEditModal
      .set(false);

  }

  updateChange() {

    if (
      this.form.invalid
    ) return;

    const updated =

      this.changeService
        .changes()
        .map(item => {

          if (

            item.id ===
            this.selectedChange?.id

          ) {

            return {

              ...item,

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

              assignedTo:
                this.form.value.assignedTo || '',

              plannedStart:
                this.form.value.plannedStart || '',

              plannedEnd:
                this.form.value.plannedEnd || '',

              implementationPlan:
                this.form.value
                  .implementationPlan || '',

              rollbackPlan:
                this.form.value
                  .rollbackPlan || ''

            };

          }

          return item;

        });

    this.changeService
      .changes
      .set(updated);

    this.closeModal();

  }

}