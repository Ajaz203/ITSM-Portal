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
activities?: ProblemActivity[];
  assignedTo: string;

  createdAt: string;

}
export interface ProblemActivity {

  user: string;

  action: string;

  createdAt: string;

}