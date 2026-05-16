import {
  Component,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { IncidentFilters }
from '../components/incident-filters/incident-filters';

import { IncidentTable }
from '../components/incident-table/incident-table';

import { CreateIncident }
from '../create-incident/create-incident';

import { IncidentService }
from '../services/incident.service';
import { IncidentDetailsDrawer }
from '../components/incident-details-drawer/incident-details-drawer';
import { EditIncident }
from '../components/edit-incident/edit-incident';
import { DeleteIncidentModal }
from '../components/delete-incident-modal/delete-incident-modal';
import { Auth } from '../../../core/services/auth';

@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [

    CommonModule,

    IncidentFilters,

    IncidentTable,

    CreateIncident,IncidentDetailsDrawer,
    EditIncident,DeleteIncidentModal,

  ],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.scss',
})
export class IncidentList {
authService =
  inject(Auth);
  
  incidentService =
    inject(IncidentService);

}