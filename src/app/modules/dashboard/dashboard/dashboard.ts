import {
  Component,
  inject,
  OnInit,
  signal
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  NgApexchartsModule
} from 'ng-apexcharts';

import {
  Analytics
} from '../../../core/services/analytics';

@Component({

  selector:
    'app-dashboard',

  standalone: true,

  imports: [

    CommonModule,
    NgApexchartsModule

  ],

  templateUrl:
    './dashboard.html',

  styleUrls: [
    './dashboard.scss'
  ]

})

export class Dashboard
implements OnInit {

  /* LOADING */

 loading =
  signal(true);

  /* SERVICES */

  analytics =
    inject(Analytics);

  /* INIT */

  ngOnInit(): void {

    setTimeout(() => {

      this.loading.set(false);

      console.log(
        'Dashboard Loaded'
      );

    }, 2000);

  }

  /* PRIORITY CHART */

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

  /* STATUS CHART */

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

  /* ASSET CHART */

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