import {
  Injectable,
  inject,
  signal
} from '@angular/core';

import {
  Router
} from '@angular/router';


import { Storage }
from './storage';

import { User } from '../../modules/incident-management/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  router =
    inject(Router);

  storage =
    inject(Storage);



  // USER STATE

  currentUser =
    signal<User | null>(null);

  // MOCK LOGIN

  login(payload: any) {

    // MOCK JWT TOKEN

    const token = btoa(

      JSON.stringify({

        name: 'Admin User',

        email:
          payload.email,

        role: 'Admin',

      })

    );

    // USER

    const user: User = {

      name: 'Admin User',

      email: payload.email,

      role: 'Admin',

      token

    };

    // SAVE

    this.storage.setToken(token);

    localStorage.setItem(
      'itsm-user',
      JSON.stringify(user)
    );

    // UPDATE SIGNAL

    this.currentUser.set(user);

    // REDIRECT

    this.router.navigate([
      '/dashboard'
    ]);

  }

  // AUTO LOGIN

  loadUser() {

    const data =
      localStorage.getItem(
        'itsm-user'
      );

    if (!data) return;

    const user =
      JSON.parse(data);

    this.currentUser.set(user);

  }

  // LOGOUT

  logout() {

    this.storage.clear();

    localStorage.removeItem(
      'itsm-user'
    );

    this.currentUser.set(null);

    this.router.navigate([
      '/login'
    ]);

  }

  // LOGIN CHECK

  isLoggedIn(): boolean {

    return !!this.storage
      .getToken();

  }

  // RBAC

  canEdit() {

    return [

      'Admin',

      'Agent'

    ].includes(

      this.currentUser()
        ?.role || ''

    );

  }

  canDelete() {

    return this.currentUser()
      ?.role === 'Admin';

  }

  canCreate() {

    return [

      'Admin',

      'Agent',

      'User'

    ].includes(

      this.currentUser()
        ?.role || ''

    );

  }

}