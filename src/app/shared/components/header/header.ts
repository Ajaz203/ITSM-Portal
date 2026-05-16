import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Layout } from '../../../core/services/layout';
import {Auth} from "../../../core/services/auth";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  notifications = 5;
    constructor(
    public layoutService: Layout,  private authService: Auth
  ) {}

  logout() {

  this.authService.logout();

}
}
