import {
  Component
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  Router
} from '@angular/router';

import {

  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators

} from '@angular/forms';

import {
  Auth
} from '../../../core/services/auth';

import {
  ToastService
} from '../../../core/services/toast';

@Component({

  selector:
    'app-login',

  standalone: true,

  imports: [

    CommonModule,
    ReactiveFormsModule

  ],

  templateUrl:
    './login.html',

  styleUrls: [
    './login.scss'
  ]

})

export class Login {

  loginForm!: FormGroup;

  submitted = false;

  loading = false;

  constructor(

    private fb: FormBuilder,

    private authService: Auth,

    private router: Router,

    private toast: ToastService

  ) {

    this.initializeForm();

    /* AUTO LOGIN */

    if (
      this.authService
        .isLoggedIn()
    ) {

      this.router.navigate([
        '/dashboard'
      ]);

    }

  }

  /* INIT FORM */

  initializeForm() {

    this.loginForm =
      this.fb.group({

        email: [

          '',

          [

            Validators.required,
            Validators.email

          ]

        ],

        password: [

          '',

          [

            Validators.required,
            Validators.minLength(6)

          ]

        ]

      });

  }

  /* LOGIN */

  submit() {

    this.submitted = true;

    /* VALIDATION */

    if (
      this.loginForm.invalid
    ) {

      this.toast.warning(
        'Please fill all fields correctly'
      );

      return;

    }

    this.loading = true;

    /* LOGIN API */

    this.authService

      .login(
        this.loginForm.value
      )

      .subscribe({

        next: (response: any) => {

          /* TOKEN */

          const token =

            response.headers.get(
              'jwt_token'
            );

          if (token) {

            localStorage.setItem(

              'jwt_token',

              token

            );

          }

          /* USER ID */

          if (
            response.body?.userId
          ) {

            localStorage.setItem(

              'userId',

              String(
                response.body.userId
              )

            );

          }

          /* GET PROFILE */

          this.getProfile(token);

        },

        error: (error) => {

          this.loading = false;

          console.error(error);

          this.toast.error(

            error?.error?.message ||

            'Login failed'

          );

        }

      });

  }

  /* PROFILE */

  getProfile(
    token: string
  ) {

    this.authService

      .getUserDetails()

      .subscribe({

        next: (userData: any) => {

          this.loading = false;

          /* SAVE USER */

          this.authService
            .saveUser(

              userData,

              token

            );

          /* SUCCESS */

          this.toast.success(
            'Login successful'
          );

        },

        error: (error) => {

          this.loading = false;

          console.error(error);

          this.toast.error(
            'Failed to load profile'
          );

        }

      });

  }

}