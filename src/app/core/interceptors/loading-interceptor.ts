import {
  HttpInterceptorFn
} from '@angular/common/http';

import {
  finalize
} from 'rxjs';

import {
  inject
} from '@angular/core';

import {
  Loader
} from '../services/loader';

export const loadingInterceptor:
HttpInterceptorFn = (

  req,
  next

) => {

  const loader =
    inject(Loader);

  loader.show();

  return next(req).pipe(

    finalize(() => {

      loader.hide();

    })

  );

};