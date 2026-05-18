export interface Vendor {

  id: number;

  name: string;

  contactPerson: string;

  email: string;

  phone: string;

  company: string;

  status:
    | 'Active'
    | 'Inactive';

}