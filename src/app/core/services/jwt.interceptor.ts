import {
  HttpInterceptorFn
} from '@angular/common/http';

export const jwtInterceptor:
HttpInterceptorFn = (

  req,
  next

) => {

  const token =
    localStorage.getItem(
      'jwt_token'
    );

  if (token) {

    req = req.clone({

      setHeaders: {

        jwt_token: token

      }

    });

  }

  return next(req);

};