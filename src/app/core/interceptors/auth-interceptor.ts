import {
  HttpInterceptorFn,
  HttpErrorResponse
} from '@angular/common/http';

import { inject } from '@angular/core';

import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';

import { throwError } from 'rxjs';

import { Storage } from '../services/storage';

export const authInterceptor: HttpInterceptorFn = (

  req,
  next

) => {

  const storageService = inject(Storage);

  const router = inject(Router);

  const token = storageService.getToken();

  if (token) {

    req = req.clone({

      setHeaders: {

        Authorization: `Bearer ${token}`

      }

    });

  }

  return next(req).pipe(

    catchError((error: HttpErrorResponse) => {

      if (error.status === 401) {

        storageService.clear();

        router.navigate(['/login']);

      }

      return throwError(() => error);

    })

  );

};