import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { inject } from "@angular/core";
import { map, take, tap } from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {

    const authService = inject(AuthService); // Injecting the AuthService
    const router = inject(Router);
    return authService.userEvent.pipe(
        take(1),
        map(user => {
            localStorage.setItem('userData', JSON.stringify(user));
            return !!user;
        }),
        tap(exist => {
            if (!exist) {
                router.navigate(["auth"]);
            }
        })
    );
};