import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { map, take } from 'rxjs';
import { User } from './model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    
    const user: User = JSON.parse(localStorage.getItem('userData'));
    if (!user) {
      return;
    }
    if (user.token) {
      this.authService.userEvent.next(user);
    }
  }

  logout() {
    this.authService.logout();
  }
}
