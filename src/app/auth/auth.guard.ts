import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { map, take, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Injecting the AuthService
  const router = inject(Router);
  return authService.userEvent.pipe(
    map((user) => {
      console.log('inside map auth guard');
      localStorage.setItem('userData', JSON.stringify(user));
      return !!user;
    }),
    tap((user) => {
      if (user) {
        console.log('logged in');
        return true;
      } else {
        console.log('inside null user');
        router.navigate(['auth']);
        return false;
      }
    })
  );
};
