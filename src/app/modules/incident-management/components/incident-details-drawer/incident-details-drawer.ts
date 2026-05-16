import {
  Component,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { IncidentService }
from '../../services/incident.service';

import { IncidentPriorityBadge }
from '../incident-priority-badge/incident-priority-badge';

import { IncidentStatusBadge }
from '../incident-status-badge/incident-status-badge';

@Component({
  selector:
    'app-incident-details-drawer',

  standalone: true,

  imports: [

    CommonModule,

    IncidentPriorityBadge,

    IncidentStatusBadge

  ],

  templateUrl:
    './incident-details-drawer.html',

  styleUrl:
    './incident-details-drawer.scss',
})
export class IncidentDetailsDrawer {

  incidentService =
    inject(IncidentService);

  closeDrawer() {

    this.incidentService
      .showDetailsDrawer
      .set(false);

  }

}