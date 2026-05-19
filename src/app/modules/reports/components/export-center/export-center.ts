import {
  Component,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import { IncidentService }
from '../../../incident-management/services/incident.service';

import { ChangeService }
from '../../../change-management/services/change';

@Component({
  selector:
    'app-export-center',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl:
    './export-center.html',

  styleUrl:
    './export-center.scss',
})
export class ExportCenter {

  incidentService =
    inject(IncidentService);

  changeService =
    inject(ChangeService);

  /* EXPORT INCIDENT CSV */

  exportIncidents() {

    const incidents =

      this.incidentService
        .incidents();

    const csvRows = [];

    const headers = [

      'Ticket ID',
      'Title',
      'Category',
      'Priority',
      'Status',
      'Assigned To',
      'Created At'

    ];

    csvRows.push(
      headers.join(',')
    );

    incidents.forEach(item => {

      const row = [

        item.ticketId,

        item.title,

        item.category,

        item.priority,

        item.status,

        item.assignedTo,

        item.createdAt

      ];

      csvRows.push(
        row.join(',')
      );

    });

    this.downloadCsv(

      csvRows.join('\n'),

      'incident-report.csv'

    );

  }

  /* EXPORT CHANGE CSV */

  exportChanges() {

    const changes =

      this.changeService
        .changes();

    const csvRows = [];

    const headers = [

      'Change ID',
      'Title',
      'Type',
      'Risk',
      'Status',
      'Approval',
      'Assigned To'

    ];

    csvRows.push(
      headers.join(',')
    );

    changes.forEach(item => {

      const row = [

        item.changeId,

        item.title,

        item.type,

        item.risk,

        item.status,

        item.approvalStatus,

        item.assignedTo

      ];

      csvRows.push(
        row.join(',')
      );

    });

    this.downloadCsv(

      csvRows.join('\n'),

      'change-report.csv'

    );

  }

  /* DOWNLOAD */

  downloadCsv(
    data: string,
    filename: string
  ) {

    const blob =

      new Blob(

        [data],

        {

          type:
            'text/csv;charset=utf-8;'

        }

      );

    const url =
      window.URL
        .createObjectURL(blob);

    const link =
      document
        .createElement('a');

    link.href = url;

    link.setAttribute(
      'download',
      filename
    );

    document.body
      .appendChild(link);

    link.click();

    document.body
      .removeChild(link);

  }

}