import {
  Component,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import { AuditLogs }
from '../services/audit-logs';

import { AuditLogFilters }
from '../components/audit-log-filters/audit-log-filters';

import { AuditLogTable }
from '../components/audit-log-table/audit-log-table';

@Component({
  selector:
    'app-audit-logs-dashboard',

  standalone: true,

  imports: [

    CommonModule,
    AuditLogFilters,
    AuditLogTable

  ],

  templateUrl:
    './audit-logs-dashboard.html',

  styleUrl:
    './audit-logs-dashboard.scss',
})
export class AuditLogsDashboard {

  auditLogs =
    inject(AuditLogs);

}