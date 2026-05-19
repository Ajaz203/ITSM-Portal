export interface ConfigurationItem {

  id: number;

  ciId: string;

  name: string;

  type:
    | 'Server'
    | 'Application'
    | 'Database'
    | 'Network'
    | 'Cloud'
    | 'Service';

  status:
    | 'Operational'
    | 'Warning'
    | 'Critical'
    | 'Offline';

  environment:
    | 'Production'
    | 'Staging'
    | 'Development';

  owner: string;

  vendor?: string;

  ipAddress?: string;

  operatingSystem?: string;

  linkedIncidents?: string[];

  linkedProblems?: string[];

  linkedChanges?: string[];

  relationships?: string[];

  createdAt: string;

}