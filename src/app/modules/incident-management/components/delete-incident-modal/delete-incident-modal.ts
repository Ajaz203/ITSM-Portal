import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { IncidentService }
from '../../services/incident.service';

import { ToastService }
from '../../../../core/services/toast';

@Component({
  selector:
    'app-delete-incident-modal',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './delete-incident-modal.html',

  styleUrl:
    './delete-incident-modal.scss',
})
export class DeleteIncidentModal {

  incidentService =
    inject(IncidentService);

  toast =
    inject(ToastService);

  closeModal() {

    this.incidentService
      .showDeleteModal
      .set(false);

  }

  deleteIncident() {

    const incident =
      this.incidentService
        .deletingIncident();

    if (!incident) return;

    // REMOVE INCIDENT

    const filtered =
      this.incidentService
        .incidents()
        .filter(item =>

          item.id !== incident.id

        );

    // UPDATE STATE

    this.incidentService
      .incidents
      .set(filtered);

    // SUCCESS TOAST

    this.toast.success(
      'Incident deleted successfully'
    );

    // CLOSE MODAL

    this.closeModal();

  }

}