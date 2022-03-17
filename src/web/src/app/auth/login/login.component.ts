import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: FormControl;
  password: FormControl;

  constructor(private authService: AuthService, private router: Router) {
    this.username = new FormControl('');
    this.password = new FormControl('');
  }

  login() {
    return this.authService
      .login({
        username: this.username.value,
        password: this.password.value,
      })
      .subscribe((data: any) => {
        if (data?.token) {
          localStorage.setItem('access_token', data.token);
          this.router.navigate(['/app']);
        }
      });
  }
}
