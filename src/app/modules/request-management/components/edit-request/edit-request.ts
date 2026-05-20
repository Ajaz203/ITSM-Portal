import {
  Component,
  effect,
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
} from '../../services/request';

@Component({
  selector:
    'app-edit-request',

  standalone: true,

  imports: [

    CommonModule,
    ReactiveFormsModule

  ],

  templateUrl:
    './edit-request.html',

  styleUrls: [
    './edit-request.scss'
  ]

})
export class EditRequest {

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

      status: [

        'Pending',

        Validators.required

      ],

      assignedTo: ['']

    });

  constructor() {

    effect(() => {

      const request =

        this.requestService
          .selectedRequest();

      if (!request) {
        return;
      }

      this.requestForm.patchValue({

        title:
          request.title,

        description:
          request.description,

        category:
          request.category,

        priority:
          request.priority,

        status:
          request.status,

        assignedTo:
          request.assignedTo

      });

    });

  }

  /* CLOSE */

  closeModal() {

    this.requestService
      .showEditModal
      .set(false);

  }

  /* UPDATE */

  updateRequest() {

    if (
      this.requestForm.invalid
    ) {

      this.requestForm
        .markAllAsTouched();

      return;

    }

    const current =

      this.requestService
        .selectedRequest();

    if (!current) {
      return;
    }

    const formValue =
  this.requestForm.value;

const updated = {

  ...current,

  title:
    formValue.title || '',

  description:
    formValue.description || '',

  category:
    formValue.category || '',

  priority:

    (formValue.priority || 'Medium') as

      'Low'
      | 'Medium'
      | 'High',

  status:

    (formValue.status || 'Pending') as

      'Pending'
      | 'Approved'
      | 'Rejected'
      | 'In Progress'
      | 'Completed',

  assignedTo:
    formValue.assignedTo || ''

};

    this.requestService
      .requests
      .update(items =>

        items.map(item =>

          item.id === current.id
            ? updated
            : item

        )

      );

    this.closeModal();

  }

}