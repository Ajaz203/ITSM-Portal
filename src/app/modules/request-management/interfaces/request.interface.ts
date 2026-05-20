export interface RequestComment {

  user: string;

  message: string;

  createdAt: string;

}

export interface ServiceRequest {

  id: number;

  requestId: string;

  title: string;

  description: string;

  category: string;

  priority:
    | 'Low'
    | 'Medium'
    | 'High';

  status:
    | 'Pending'
    | 'Approved'
    | 'Rejected'
    | 'In Progress'
    | 'Completed';

  requestedBy: string;

  assignedTo?: string;

  createdAt: string;

  approvalBy?: string;

  approvalComment?: string;

  slaHours?: number;

  comments?: RequestComment[];

}