import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  NgApexchartsModule,

  ApexChart,
  ApexNonAxisChartSeries,
  ApexLegend

} from 'ng-apexcharts';

type ChartOptions = {

  series: ApexNonAxisChartSeries;

  chart: ApexChart;

  labels: string[];

 legend: ApexLegend;

};

@Component({
  selector:
    'app-report-charts',

  standalone: true,

  imports: [

    CommonModule,
    NgApexchartsModule

  ],

  templateUrl:
    './report-charts.html',

  styleUrl:
    './report-charts.scss',
})
export class ReportCharts {

  /* INCIDENT CHART */

  incidentChart: ChartOptions = {

    series: [

      18,
      42,
      9

    ],

    chart: {

      type: 'donut',

      height: 320

    },

    labels: [

      'Open',
      'Resolved',
      'Breached'

    ],

    legend: {

      position: 'bottom'

    }

  };

  /* CHANGE CHART */

  changeChart: ChartOptions = {

    series: [

      30,
      7,
      12

    ],

    chart: {

      type: 'pie',

      height: 320

    },

    labels: [

      'Approved',
      'Emergency',
      'Pending'

    ],

    legend: {

      position: 'bottom'

    }

  };

  /* SLA CHART */

slaChart: ChartOptions = {

  series: [

    70,
    18,
    12

  ],

  chart: {

    type: 'radialBar',

    height: 340

  },

  labels: [

    'Healthy',
    'Warning',
    'Breached'

  ],

  legend: {

    position: 'bottom'

  }

};

}