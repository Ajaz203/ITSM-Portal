import {
  Injectable,
  inject
} from '@angular/core';

import { interval }
from 'rxjs';

import { IncidentService }
from '../../modules/incident-management/services/incident.service';

import {Notification} from '../services/notification'
import { ToastService } from './toast';
@Injectable({
  providedIn: 'root'
})
export class RealtimeService {

  incidentService =
    inject(IncidentService);

  notificationService =
    inject(Notification);

  toast =
    inject(ToastService);

  constructor() {

    this.initializeRealtime();

  }

  initializeRealtime() {

    // EVERY 20 SECONDS

    interval(60000)
      .subscribe(() => {

        this.generateRealtimeEvent();

      });

  }

  generateRealtimeEvent() {

    const incidents =
      this.incidentService
        .incidents();

    if (!incidents.length)
      return;

    // RANDOM INCIDENT

    const randomIncident =

      incidents[
        Math.floor(
          Math.random()
          * incidents.length
        )
      ];

    // RANDOM EVENTS

    const events = [

      'SLA Warning',

      'Incident Updated',

      'New Comment Added',

      'Incident Escalated'

    ];

    const randomEvent =

      events[
        Math.floor(
          Math.random()
          * events.length
        )
      ];

    // ADD ACTIVITY

    this.incidentService
      .addActivity(

        randomIncident.id,

        randomEvent

      );

    // ADD NOTIFICATION

    this.notificationService
      .addNotification({

        id: Date.now(),

        title: randomEvent,

        message:

          `${randomIncident.ticketId} - ${randomEvent}`,

        type:

          randomEvent
            === 'SLA Warning'

            ? 'warning'

            : 'info',

        createdAt:
          'Just now',

        read: false

      });
this.toast.info(

  `${randomIncident.ticketId}
   ${randomEvent}`

);
    // SLA STATUS RANDOMIZATION

    const updated =
      incidents.map(item => {

        if (
          item.id ===
          randomIncident.id
        ) {

          return {

            ...item,

            slaStatus:

              randomEvent ===
              'SLA Warning'

                ? 'warning' as const

                : item.slaStatus

          };

        }

        return item;

      });

    this.incidentService
      .incidents
      .set(updated);

  }

}