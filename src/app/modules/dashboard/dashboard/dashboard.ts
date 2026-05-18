import { Component } from '@angular/core';
import { ApiService } from '../../../core/services/api';
import {
  inject
} from '@angular/core';

import {
  NgApexchartsModule
} from 'ng-apexcharts';

import { Analytics }
from '../../../core/services/analytics';
@Component({
  selector: 'app-dashboard',
  imports: [NgApexchartsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  constructor(
  private apiService: ApiService
) {

  this.apiService
    .get('test')
    .subscribe({
      next: (res) => {
        console.log(res);
      }
    });

}
analytics =
  inject(Analytics);
  priorityChart = {

  series:
    this.analytics
      .priorityData(),

  chart: {

  type: 'donut' as const,

    height: 320

  },

  labels: [

    'Low',

    'Medium',

    'High',

    'Critical'

  ]

};

statusChart = {

  series: [

    {

      name: 'Incidents',

      data:
        this.analytics
          .statusData()

    }

  ],

  chart: {

   type: 'bar' as const,

    height: 320

  },

  xaxis: {

    categories: [

      'Open',

      'In Progress',

      'Resolved',

      'Closed'

    ]

  }

};
assetChart = {

  series:
    this.analytics
      .assetCategoryData(),

  chart: {

    type: 'donut' as const,

    height: 320

  },

  labels: [

    'Laptop',

    'Desktop',

    'Server',

    'Network Device'

  ]

};

}
