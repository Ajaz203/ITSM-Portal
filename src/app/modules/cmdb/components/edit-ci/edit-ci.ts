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
    'app-edit-ci',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:
    './edit-ci.html',

  styleUrl:
    './edit-ci.scss',
})
export class EditCi {

  fb =
    inject(FormBuilder);

  cmdbService =
    inject(Cmdb);

  selectedCI =
    this.cmdbService
      .selectedCI();

  form =
    this.fb.group({

      name: [
        this.selectedCI?.name || '',
        Validators.required
      ],

      type: [
        this.selectedCI?.type || ''
      ],

      status: [
        this.selectedCI?.status || ''
      ],

      environment: [
        this.selectedCI?.environment || ''
      ],

      owner: [
        this.selectedCI?.owner || ''
      ],

      vendor: [
        this.selectedCI?.vendor || ''
      ],

      ipAddress: [
        this.selectedCI?.ipAddress || ''
      ],

      operatingSystem: [
        this.selectedCI?.operatingSystem || ''
      ],

      relationships: [

        this.selectedCI
          ?.relationships
          ?.join(', ') || ''

      ]

    });

  closeModal() {

    this.cmdbService
      .showEditModal
      .set(false);

  }

  updateCI() {

    if (
      this.form.invalid
    ) return;

    const updated =

      this.cmdbService
        .cis()
        .map(ci => {

          if (

            ci.id ===
            this.selectedCI?.id

          ) {

            return {

              ...ci,

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

                  ) || []

            };

          }

          return ci;

        });

    this.cmdbService
      .cis
      .set(updated);

    this.closeModal();

  }

}