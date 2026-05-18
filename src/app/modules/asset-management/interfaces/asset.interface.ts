export interface Asset {

  id: number;

  assetId: string;

  name: string;

  category: string;

  vendor: string;

  assignedTo: string;

  status:
    | 'Active'
    | 'Inactive'
    | 'Maintenance'
    | 'Retired';

  purchaseDate: string;

  warrantyExpiry: string;

  location: string;

}