import {
  ApplicationConfig
} from '@angular/core';

import {
  provideRouter
} from '@angular/router';

import {
  provideHttpClient,
  withInterceptors
} from '@angular/common/http';

import {
  provideAnimations
} from '@angular/platform-browser/animations';

import {
  provideToastr
} from 'ngx-toastr';

import { routes } from './app.routes';

import {
  authInterceptor
} from './core/interceptors/auth-interceptor';

import {
  jwtInterceptor
} from './core/interceptors/jwt.interceptor';
import { loadingInterceptor } from './core/interceptors/loading-interceptor';

export const appConfig: ApplicationConfig = {

  providers: [

    provideRouter(routes),

    provideHttpClient(

      withInterceptors([
            jwtInterceptor,
        authInterceptor,
          loadingInterceptor
      ])

    ),

    // ANIMATIONS

    provideAnimations(),

    // TOASTR

    provideToastr({

      positionClass:
        'toast-top-right',

      timeOut: 3000,

      preventDuplicates: true,

      progressBar: true

    })

  ]

};