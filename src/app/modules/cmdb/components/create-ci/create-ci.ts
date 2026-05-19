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

import { Cmdb }
from '../../services/cmdb';

@Component({
  selector:
    'app-create-ci',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:
    './create-ci.html',

  styleUrl:
    './create-ci.scss',
})
export class CreateCi {

  fb =
    inject(FormBuilder);

  cmdbService =
    inject(Cmdb);

  form =
    this.fb.group({

      name: [
        '',
        Validators.required
      ],

      type: [
        '',
        Validators.required
      ],

      status: [
        '',
        Validators.required
      ],

      environment: [
        '',
        Validators.required
      ],

      owner: [
        '',
        Validators.required
      ],

      vendor: [''],

      ipAddress: [''],

      operatingSystem: [''],

      relationships: ['']

    });

  closeModal() {

    this.cmdbService
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

      this.cmdbService
        .cis();

    this.cmdbService
      .cis
      .set([

        {

          id:
            current.length + 1,

          ciId:
            'CI00' +
            (current.length + 1),

          name:
            this.form.value.name || '',

          type:
            this.form.value.type as
              | 'Server'
              | 'Application'
              | 'Database'
              | 'Network'
              | 'Cloud'
              | 'Service',

          status:
            this.form.value.status as
              | 'Operational'
              | 'Warning'
              | 'Critical'
              | 'Offline',

          environment:
            this.form.value.environment as
              | 'Production'
              | 'Staging'
              | 'Development',

          owner:
            this.form.value.owner || '',

          vendor:
            this.form.value.vendor || '',

          ipAddress:
            this.form.value.ipAddress || '',

          operatingSystem:
            this.form.value.operatingSystem || '',

          relationships:

            this.form.value
              .relationships

              ?.split(',')

              .map(item =>

                item.trim()

              ) || [],

          linkedIncidents: [],

          linkedProblems: [],

          linkedChanges: [],

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