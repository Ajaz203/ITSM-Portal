export interface Change {

  id: number;

  changeId: string;

  title: string;

  description: string;

  type:
    | 'Normal'
    | 'Emergency'
    | 'Standard';

  risk:
    | 'Low'
    | 'Medium'
    | 'High';

  status:
    | 'Pending'
    | 'Approved'
    | 'Scheduled'
    | 'Implemented'
    | 'Rejected'
    | 'Closed';

  assignedTo: string;

  rollbackPlan?: string;

  implementationPlan?: string;

  plannedStart: string;

  plannedEnd: string;

  approvalStatus?:
    | 'Pending'
    | 'Approved'
    | 'Rejected';

  approvalComment?: string;

  approvedBy?: string;

  createdAt: string;

}