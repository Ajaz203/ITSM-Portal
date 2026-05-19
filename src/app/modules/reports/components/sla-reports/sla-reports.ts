import {
  Component,
  computed,
  inject
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

import { Reports }
from '../../services/reports';

type ChartOptions = {

  series: ApexNonAxisChartSeries;

  chart: ApexChart;

  labels: string[];

  legend: ApexLegend;

};

@Component({
  selector:
    'app-sla-reports',

  standalone: true,

  imports: [

    CommonModule,
    NgApexchartsModule

  ],

  templateUrl:
    './sla-reports.html',

  styleUrl:
    './sla-reports.scss',
})
export class SlaReports {

  reports =
    inject(Reports);

  compliance =
    computed(() => {

      const total =

        this.reports
          .totalSlaTickets();

      const healthy =

        this.reports
          .healthySla();

      if (!total) {

        return 0;

      }

      return Math.round(

        (healthy / total) * 100

      );

    });

  slaChart: ChartOptions = {

    series: [

      this.reports
        .healthySla(),

      this.reports
        .warningSla(),

      this.reports
        .breachedSlaTickets()

    ],

    chart: {

      type: 'donut',

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