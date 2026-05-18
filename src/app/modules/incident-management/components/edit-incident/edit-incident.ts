import {
  Component,
  effect,
  inject
} from '@angular/core';

import { CommonModule }
  from '@angular/common';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { IncidentService }
  from '../../services/incident.service';

import { INCIDENT_PRIORITY }
  from '../../constants/incident-priority';

import { ToastService }
  from '../../../../core/services/toast';
import {
  INCIDENT_STATUS
} from '../../constants/incident-status';
import {
  INCIDENT_AGENTS
} from '../../constants/incident-agents';

import { Notification } from '../../../../core/services/notification';
@Component({
  selector: 'app-edit-incident',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:
    './edit-incident.html',

  styleUrl:
    './edit-incident.scss',
})
export class EditIncident {
  statuses =
    INCIDENT_STATUS;
  fb = inject(FormBuilder);

  incidentService =
    inject(IncidentService);

  toast =
    inject(ToastService);
  agents =
    INCIDENT_AGENTS;

  notification =
    inject(Notification);

  priorities =
    INCIDENT_PRIORITY;

  form = this.fb.group({

    title: [
      '',
      Validators.required
    ],

    category: [
      '',
      Validators.required
    ],

    priority: [
      '',
      Validators.required
    ],

    status: [
      '',
      Validators.required
    ],

    assignedTo: [
      '',
      Validators.required
    ],

    description: [
      '',
      Validators.required
    ]

  });

  constructor() {

    effect(() => {

      const incident =
        this.incidentService
          .editingIncident();

      if (!incident) return;

      this.form.patchValue({

        title:
          incident.title,

        category:
          incident.category,

        priority:
          incident.priority,

        status:
          incident.status,

        assignedTo:
          incident.assignedTo,

        description:
          incident.description

      });

    });

  }

  closeModal() {

    this.incidentService
      .showEditModal
      .set(false);

  }

  updateIncident() {

    // VALIDATION

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      this.toast.warning(
        'Please fill all required fields'
      );

      return;

    }

    const incident =
      this.incidentService
        .editingIncident();

    if (!incident) return;

    const previousAssignee =
      incident.assignedTo;

    const newAssignee =
      this.form.value
        .assignedTo || '';
    // UPDATE DATA

    const updated =
      this.incidentService
        .incidents()
        .map(item => {

          if (
            item.id === incident.id
          ) {

            return {

              ...item,

              title:
                this.form.value.title || '',

              category:
                this.form.value.category || '',

              priority:
                this.form.value.priority || '',

              status:
                this.form.value.status || '',

              assignedTo:
                this.form.value.assignedTo || '',

              description:
                this.form.value.description || ''

            };

          }

          return item;

        });

    // UPDATE STATE

    this.incidentService
      .incidents
      .set(updated);

      if (
  previousAssignee !==
  newAssignee
) {

  // ACTIVITY

  this.incidentService
    .addActivity(

      incident.id,

      `Incident reassigned to ${newAssignee}`

    );

  // NOTIFICATION

  this.notification
    .addNotification({

      id: Date.now(),

      title:
        'Incident Assigned',

      message:
        `${incident.ticketId} assigned to ${newAssignee}`,

      type: 'info',

      createdAt:
        'Just now',

      read: false

    });

  // TOAST

  this.toast.success(

    `Assigned to ${newAssignee}`

  );

}

    this.incidentService
      .addActivity(

        incident.id,

        'Incident updated'

      );
    // SUCCESS TOAST

    this.toast.success(
      'Incident updated successfully'
    );

    // CLOSE MODAL

    this.closeModal();

  }

}