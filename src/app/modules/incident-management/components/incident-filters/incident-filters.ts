import {
  Component,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { IncidentService } from '../../services/incident.service';

@Component({
  selector: 'app-incident-filters',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './incident-filters.html',
  styleUrl: './incident-filters.scss',
})
export class IncidentFilters {

  incidentService =
    inject(IncidentService);

  statuses = [

    'All',

    'Open',

    'In Progress',

    'Resolved',

    'Closed'

  ];

}