import {
  Component,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  RequestService
} from '../services/request';

@Component({
  selector:
    'app-create-request',

  standalone: true,

  imports: [

    CommonModule,
    ReactiveFormsModule

  ],

  templateUrl:
    './create-request.html',

  styleUrls: [
    './create-request.scss'
  ]

})
export class CreateRequest {

  requestService =
    inject(RequestService);

  fb =
    inject(FormBuilder);

  requestForm =
    this.fb.group({

      title: [

        '',

        Validators.required

      ],

      description: [

        '',

        Validators.required

      ],

      category: [

        '',

        Validators.required

      ],

      priority: [

        'Medium',

        Validators.required

      ],

      requestedBy: [

        '',

        Validators.required

      ]

    });

  /* CLOSE */

  closeModal() {

    this.requestService
      .showCreateModal
      .set(false);

  }

  /* CREATE */

  createRequest() {

    if (
      this.requestForm.invalid
    ) {

      this.requestForm
        .markAllAsTouched();

      return;

    }

    const value =
      this.requestForm.value;

   const priority =

  (value.priority || 'Medium') as

    'Low'
    | 'Medium'
    | 'High';

    /* SLA */

    let slaHours = 24;

    if (
      priority === 'High'
    ) {

      slaHours = 4;

    }

    else if (
      priority === 'Medium'
    ) {

      slaHours = 8;

    }

    else {

      slaHours = 24;

    }

    /* REQUEST */

    const newRequest = {

      id: Date.now(),

      requestId:
        `REQ-${Date.now()}`,

      title:
        value.title || '',

      description:
        value.description || '',

      category:
        value.category || '',

      priority,

      status:
        'Pending' as const,

      requestedBy:
        value.requestedBy || '',

      assignedTo:
        'Service Desk',

      createdAt:
        new Date()
          .toLocaleDateString(),

      slaHours

    };

    this.requestService
      .requests
      .update(items => [

        newRequest,
        ...items

      ]);

    this.closeModal();

    this.requestForm.reset({

      priority:
        'Medium'

    });

  }

}