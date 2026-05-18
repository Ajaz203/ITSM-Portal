export interface Problem {

  id: number;

  problemId: string;

  title: string;

  description: string;

  priority: string;

  status:
    | 'Open'
    | 'Root Cause Analysis'
    | 'Known Error'
    | 'Resolved';

  rootCause?: string;

  workaround?: string;

  permanentFix?: string;

  linkedIncidents?: string[];

  assignedTo: string;

  createdAt: string;

}