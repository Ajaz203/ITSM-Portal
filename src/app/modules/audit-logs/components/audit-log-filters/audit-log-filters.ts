import {
  Component,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import { FormsModule }
from '@angular/forms';

import { AuditLogs }
from '../../services/audit-logs';

@Component({
  selector:
    'app-audit-log-filters',

  standalone: true,

  imports: [

    CommonModule,
    FormsModule

  ],

  templateUrl:
    './audit-log-filters.html',

  styleUrl:
    './audit-log-filters.scss',
})
export class AuditLogFilters {

  auditLogs =
    inject(AuditLogs);

}