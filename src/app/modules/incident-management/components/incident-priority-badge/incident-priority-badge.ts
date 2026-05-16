import {
  Component,
  input
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incident-priority-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl:
    './incident-priority-badge.html',
  styleUrl:
    './incident-priority-badge.scss',
})
export class IncidentPriorityBadge {

  priority = input('');

}