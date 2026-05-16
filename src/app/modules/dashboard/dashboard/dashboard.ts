import { Component } from '@angular/core';
import { ApiService } from '../../../core/services/api';

@Component({
  selector: 'app-dashboard',
  imports: [],
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
}
