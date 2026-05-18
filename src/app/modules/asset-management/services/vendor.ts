import {
  Injectable,
  computed,
  signal
} from '@angular/core';

import { Vendor as VendorModel }
from '../interfaces/vendor.interface';

@Injectable({
  providedIn: 'root'
})
export class Vendor {

  // SEARCH

  search =
    signal('');

  // VENDORS

  vendors =
    signal<VendorModel[]>([

      {

        id: 1,

        name:
          'Dell Support',

        contactPerson:
          'Rahul Sharma',

        email:
          'dell@support.com',

        phone:
          '+91 9876543210',

        company:
          'Dell',

        status:
          'Active'

      },

      {

        id: 2,

        name:
          'HP Enterprise',

        contactPerson:
          'Aman Gupta',

        email:
          'hp@enterprise.com',

        phone:
          '+91 9876500000',

        company:
          'HP',

        status:
          'Active'

      }

    ]);

  // FILTERED VENDORS

  filteredVendors =
    computed(() => {

      const keyword =

        this.search()
          .toLowerCase();

      return this.vendors()
        .filter(vendor =>

          vendor.name
            .toLowerCase()
            .includes(keyword)

          ||

          vendor.company
            .toLowerCase()
            .includes(keyword)

          ||

          vendor.contactPerson
            .toLowerCase()
            .includes(keyword)

        );

    });

}