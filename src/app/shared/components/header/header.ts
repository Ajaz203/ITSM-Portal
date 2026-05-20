import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Layout } from '../../../core/services/layout';
import {Auth} from "../../../core/services/auth";
import { Notification } from '../../../core/services/notification';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  showProfileMenu = false;
  notifications = 5;
    constructor(
    public layoutService: Layout,  private authService: Auth
  ) {}
auth =
  inject(Auth);
  logout() {

  this.authService.logout();

}
  notification =
  inject(Notification);
}
