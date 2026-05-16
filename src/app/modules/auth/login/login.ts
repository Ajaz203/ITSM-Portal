import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Auth } from '../../../core/services/auth';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm!: FormGroup;

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: Auth,
    private router: Router
  ) {

    this.initializeForm();
    if (this.authService.isLoggedIn()) {

      this.router.navigate(['/dashboard']);

    }
  }

  initializeForm() {

    this.loginForm = this.fb.group({

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

  submit() {

    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(
      this.loginForm.value
    );

  }
}
