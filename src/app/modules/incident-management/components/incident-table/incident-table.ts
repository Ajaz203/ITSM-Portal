import {
  Component,
  inject,
  signal
} from '@angular/core';

import { CommonModule } from '@angular/common';
import {HostListener} from '@angular/core';
import { IncidentService }
from '../../services/incident.service';

import { IncidentPriorityBadge }
from '../incident-priority-badge/incident-priority-badge';

import { IncidentStatusBadge }
from '../incident-status-badge/incident-status-badge';
import { Auth }
from '../../../../core/services/auth';

@Component({
  selector: 'app-incident-table',
  standalone: true,
  imports: [

    CommonModule,

    IncidentPriorityBadge,

    IncidentStatusBadge

  ],
  templateUrl: './incident-table.html',
  styleUrl: './incident-table.scss',
})
export class IncidentTable {

  incidentService =
    inject(IncidentService);
auth =
  inject(Auth);
  
  activeMenu = signal<number | null>(
    null
  );

toggleMenu(

  id: number,

  event: Event

) {

  event.stopPropagation();

  this.activeMenu.set(

    this.activeMenu() === id
      ? null
      : id

  );

}
@HostListener(
  'document:click'
)

closeDropdown() {

  this.activeMenu.set(null);

}
}