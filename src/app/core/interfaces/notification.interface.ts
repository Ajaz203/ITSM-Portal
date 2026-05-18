export interface NotificationItem {

  id: number;

  title: string;

  message: string;

  type:
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';

  createdAt: string;

  read: boolean;

}