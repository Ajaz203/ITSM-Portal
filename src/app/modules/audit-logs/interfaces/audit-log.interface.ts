export interface AuditLog {

  id: number;

  module:
    | 'Incident'
    | 'Change'
    | 'Asset'
    | 'User'
    | 'CMDB'
    | 'Vendor';

  action: string;

  performedBy: string;

  createdAt: string;

  severity:
    | 'Low'
    | 'Medium'
    | 'High';

  description: string;

}