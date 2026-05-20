import {
  Component,
  computed
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  RouterModule
} from '@angular/router';

import {
  sidebarMenu
} from '../../../core/constants/sidebar-menu';

import {
  Layout
} from '../../../core/services/layout';

import {
  Auth
} from '../../../core/services/auth';

@Component({
  selector:
    'app-sidebar',

  standalone: true,

  imports: [

    CommonModule,
    RouterModule

  ],

  templateUrl:
    './sidebar.html',

  styleUrls: [
    './sidebar.scss'
  ]

})

export class Sidebar {

  constructor(

    public layoutService: Layout,

    public auth: Auth

  ) {}

  /* DYNAMIC SIDEBAR */

  menus = computed(() => {

    const modules =

      this.auth
        .currentUser()
        ?.modules || {};

    return sidebarMenu

      .map(section => ({

        ...section,

        menus:

          section.menus.filter(

            (menu: any) =>

              modules[
                menu.permission
              ] === true

          )

      }))

      .filter(

        section =>

          section.menus.length > 0

      );

  });

}