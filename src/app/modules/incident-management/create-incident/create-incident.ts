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

import { IncidentService }
  from '../services/incident.service';

import { INCIDENT_PRIORITY }
  from '../constants/incident-priority';

import { ToastService }
  from '../../../core/services/toast';
  import { Asset }
from '../../asset-management/services/asset';

@Component({
  selector: 'app-create-incident',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:
    './create-incident.html',

  styleUrl:
    './create-incident.scss',
})
export class CreateIncident {

  fb = inject(FormBuilder);

  incidentService =
    inject(IncidentService);

  toast =
    inject(ToastService);

assetService =
  inject(Asset);
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

    assignedTo: [
      '',
      Validators.required
    ],

    description: [
      '',
      Validators.required
    ],
    assetId: ['']

  });

  closeModal() {

    this.incidentService
      .showCreateModal
      .set(false);

  }

  submit() {

    // VALIDATION

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      this.toast.warning(
        'Please fill all required fields'
      );

      return;

    }

    const current =
      this.incidentService
        .incidents();
const selectedAsset =

  this.assetService
    .assets()
    .find(asset =>

      asset.assetId ===
      this.form.value.assetId

    );
    // ADD INCIDENT

    this.incidentService
      .incidents
      .set([

     {

  id:
    current.length + 1,

  ticketId:
    'INC00' +
    (current.length + 1),

  title:
    this.form.value.title || '',

  category:
    this.form.value.category || '',

  priority:
    this.form.value.priority || '',

  assignedTo:
    this.form.value.assignedTo || '',

  description:
    this.form.value.description || '',

  assetId:
    this.form.value.assetId || '',

  assetName:
    selectedAsset
      ? selectedAsset.name
      : '',

  status:
    'Open',

  slaHours:
    this.incidentService
      .getSlaByPriority(

        this.form.value.priority || ''

      ),

  slaStatus:
    'healthy',

  createdAt:
    new Date()
      .toISOString()
      .split('T')[0],

  activities: [

    {

      user:
        'Admin',

      action:
        'Incident created',

      createdAt:
        new Date()
          .toLocaleString()

    }

  ]

},

        ...current

      ]);

    // SUCCESS TOAST

    this.toast.success(
      'Incident created successfully'
    );

    // CLOSE

    this.closeModal();

    // RESET

    this.form.reset();

  }

}