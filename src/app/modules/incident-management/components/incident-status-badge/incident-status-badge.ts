import {
  Component,
  input
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incident-status-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl:
    './incident-status-badge.html',
  styleUrl:
    './incident-status-badge.scss',
})
export class IncidentStatusBadge {

  status = input('');

  getStatusClass() {

    return this.status()
      .toLowerCase()
      .replaceAll(' ', '-');

  }

}