import {
  Injectable,
  computed,
  signal
} from '@angular/core';

import { NotificationItem }
from '../interfaces/notification.interface';

@Injectable({
  providedIn: 'root',
})
export class Notification {
   showNotifications =
    signal(false);

  // DATA

  notifications =
    signal<NotificationItem[]>([

      {

        id: 1,

        title:
          'Incident Assigned',

        message:
          'INC00124 assigned to you',

        type: 'info',

        createdAt:
          '2 mins ago',

        read: false

      },

      {

        id: 2,

        title:
          'SLA Warning',

        message:
          'INC00111 nearing breach',

        type: 'warning',

        createdAt:
          '10 mins ago',

        read: false

      },

      {

        id: 3,

        title:
          'Incident Resolved',

        message:
          'INC00102 resolved',

        type: 'success',

        createdAt:
          '1 hour ago',

        read: true

      }

    ]);

  // UNREAD COUNT

  unreadCount = computed(() =>

    this.notifications()
      .filter(

        item => !item.read

      ).length

  );

  // TOGGLE

  toggleNotifications() {

    this.showNotifications.update(
      value => !value
    );

  }

  // MARK AS READ

  markAsRead(id: number) {

    const updated =
      this.notifications()
        .map(item => ({

          ...item,

          read:

            item.id === id

              ? true

              : item.read

        }));

    this.notifications.set(
      updated
    );

  }

  // ADD NOTIFICATION

  addNotification(

    notification:
      NotificationItem

  ) {

    this.notifications.update(
      value => [

        notification,

        ...value

      ]
    );

  }
}
