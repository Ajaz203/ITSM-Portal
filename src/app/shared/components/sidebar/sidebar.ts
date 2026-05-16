import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { sidebarMenu } from '../../../core/constants/sidebar-menu';
import { Layout } from '../../../core/services/layout';
import {Auth} from '../../../core/services/auth';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

 

  constructor(
    public layoutService: Layout,
    public auth: Auth
  ) {}

  menus = computed(() => {

  const role =

    this.auth
      .currentUser()
      ?.role || '';

  return sidebarMenu
    .map(section => ({

      ...section,

      menus:
        section.menus.filter(

          menu =>

            menu.roles.includes(
              role
            )

        )

    }))
    .filter(

      section =>
        section.menus.length > 0

    );

});
}

