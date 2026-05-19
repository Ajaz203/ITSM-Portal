import {
  Component,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import { AuditLogs }
from '../../services/audit-logs';

@Component({
  selector:
    'app-audit-log-table',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './audit-log-table.html',

  styleUrl:
    './audit-log-table.scss',
})
export class AuditLogTable {

  auditLogs =
    inject(AuditLogs);

}