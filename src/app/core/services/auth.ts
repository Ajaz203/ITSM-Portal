import {
  Injectable,
  inject,
  signal
} from '@angular/core';

import {
  Router
} from '@angular/router';

import {
  HttpClient
} from '@angular/common/http';

import { Storage }
from './storage';

import { User }
from '../../modules/incident-management/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})

export class Auth {

  router =
    inject(Router);

  storage =
    inject(Storage);

  http =
    inject(HttpClient);

  /* API URL */

  apiUrl =
    'https://api.hr.timesofpeople.com/';

  /* USER STATE */

  currentUser =
    signal<User | null>(null);

  /* LOGIN API */

  login(payload: any) {

    return this.http.post(

      this.apiUrl + 'login',

      payload,

      {
        observe: 'response'
      }

    );

  }
/* GET USER DETAILS */

getUserDetails() {

  return this.http.post(

    this.apiUrl +

    'getUserDetails',

    this.getCommonPayload(
      'Dashboard'
    )

  );

}


/* SAVE USER */

saveUser(
  body: any,

  token: string
) {

const user: User = {

  firstName:
    body?.firstName,

  lastName:
    body?.lastName,

  fullName:

    `${body?.firstName || ''}

     ${body?.lastName || ''}`,

  email:
    body?.officialEmail,

  role:

    body?.groupNames?.[0]

    || 'User',

  image:
    body?.image,

  employeeId:
    body?.employeeId,

  organisationId:
    body?.organisationId,

  groupNames:
    body?.groupNames,

  modules:
    body?.modules,

  permissions:
    body?.permissions,

  tabs:
    body?.tabs,

  token

};
  /* SAVE TOKEN */

  this.storage.setToken(
    token
  );

  /* SAVE USER */

  localStorage.setItem(

    'itsm-user',

    JSON.stringify(user)

  );

  /* SAVE IDS */

  localStorage.setItem(

    'userId',

    String(
      body?.employeeId
    )

  );

  localStorage.setItem(

    'organisationId',

    String(
      body?.organisationId
    )

  );

  /* UPDATE SIGNAL */

  this.currentUser.set(user);

  /* REDIRECT */

  this.router.navigate([
    '/dashboard'
  ]);

}

  /* AUTO LOGIN */

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

  /* LOGOUT */

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

  /* LOGIN CHECK */

  isLoggedIn(): boolean {

    return !!this.storage
      .getToken();

  }
/* COMMON PAYLOAD */

getCommonPayload(
  permissionName: string
) {

  const userId =

    localStorage.getItem(
      'userId'
    ) || '';

  return {

    userId,

    type:
      'employee',

    employeeIdMiddleware:
      userId,

    permissionName

  };

}


  /* RBAC */

  canEdit() {

    return [

      'Admin',
      'Agent',
      'Employee'

    ].includes(

      this.currentUser()
        ?.role || ''

    );

  }

  canDelete() {

    return this.currentUser()
      ?.role === 'Admin' || this.currentUser()?.role === 'Employee';

  }

  canCreate() {

    return [

      'Admin',
      'Agent',
       'Employee'

    ].includes(

      this.currentUser()
        ?.role || ''

    );

  }

}