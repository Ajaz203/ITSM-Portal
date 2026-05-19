import {
  Component,
  inject
} from '@angular/core';

import { CommonModule }
from '@angular/common';

import { Reports } from '../services/reports';
import { ReportCharts }
from '../components/report-charts/report-charts';
@Component({
  selector:
    'app-reports-dashboard',

  standalone: true,

  imports: [
    CommonModule,
    ReportCharts
  ],

  templateUrl:
    './reports-dashboard.html',

  styleUrl:
    './reports-dashboard.scss',
})
export class ReportsDashboard {

  reportsService =
    inject(Reports);

}