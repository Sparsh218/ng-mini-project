import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  constructor(private authService: AuthService) {}
  isLogin: boolean = true;

  onSubmit(form: NgForm) {
    if (this.isLogin) {
      this.authService.signIn(form.controls['username'].value, form.controls['password'].value);
    } else {
      this.authService.signUp(form.controls['username'].value, form.controls['password'].value);
    }
    form.reset();
  }

  toggleLogin() {
    this.isLogin = !this.isLogin;
  }

}
