export interface IncidentComment {

  user: string;

  message: string;

  createdAt: string;

  type: 'comment' | 'note';

}

export interface IncidentAttachment {

  name: string;

  size: string;

  type: string;

}

export interface Incident {

  id: number;

  ticketId: string;

  title: string;

  description: string;

  category: string;

  priority: string;

  status: string;

  assignedTo: string;

  createdAt: string;

  comments?: IncidentComment[];

attachments?: IncidentAttachment[];

activities?: IncidentActivity[];

slaHours?: number;

  slaStatus?: 'healthy'
  | 'warning'
  | 'breached';
}
export interface IncidentActivity {

  user: string;

  action: string;

  createdAt: string;

}