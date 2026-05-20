import {
  Component,
  inject
} from '@angular/core';

import { Auth }
from './core/services/auth';
import { RouterOutlet } from '@angular/router';
import {RealtimeService} from './core/services/realtime';
import {
  GlobalToast
} from './shared/components/global-toast/global-toast';

import {
  GlobalLoader
} from './shared/components/global-loader/global-loader';
@Component({
  selector: 'app-root',
    standalone: true,
  imports: [RouterOutlet,GlobalLoader,GlobalToast],
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
