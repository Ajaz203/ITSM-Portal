export interface ReportMetric {

  title: string;

  value: number;

  icon: string;

  type:
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info';

}