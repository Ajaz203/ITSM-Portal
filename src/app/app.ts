import {
  Component,
  inject
} from '@angular/core';

import { Auth }
from './core/services/auth';
import { RouterOutlet } from '@angular/router';
import {RealtimeService} from './core/services/realtime';
@Component({
  selector: 'app-root',
    standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
auth =
  inject(Auth);
realtime =
  inject(RealtimeService);
constructor() {

  this.auth.loadUser();

}
}
