import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../util/constants';
import { SignUpResponse } from '../responses/sign-up.response';
import { SignUpRequest } from '../requests/sign-up.request';
import { BehaviorSubject, catchError, map, Subject, throwError } from 'rxjs';
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

    userEvent: Subject<User> = new BehaviorSubject<User>(null);

  constructor(private httpClient: HttpClient, private router: Router) {}

  signUp(username: string, password: string) {

    this.httpClient.post<SignUpResponse>(
      Constants.signUpUrl,
      new SignUpRequest(username, password)
    )
    .pipe(map(data => {
        return new User(data.email, data.idToken, data.expiresIn);
    }),
    catchError(errorRes => {
        return throwError(() => new Error(errorRes.error.error.message));
    }))
    .subscribe({
        next: data => {
            this.userEvent.next(data);
        },
        error: error => this.handleError(error)
    });
  }

  signIn(username: string, password: string) {

    this.httpClient.post<SignUpResponse & {registered: boolean}>(
      Constants.signInUrl,
      new SignUpRequest(username, password)
    )
    .pipe(map(data => {
        return new User(data.email, data.idToken, data.expiresIn);
    }),
    catchError(errorRes => {
        return throwError(() => new Error(errorRes.error.error.message));
    }))
    .subscribe({
        next: data => {
            this.userEvent.next(data);
            this.router.navigate(["recipe"]);
        },
        error: error => this.handleError(error)
    });
  }

  handleError(error: Error) {
    switch(error.message) {
        case 'EMAIL_EXISTS':
            console.log("email exist error");
            break;
        case 'OPERATION_NOT_ALLOWED':
            console.log("not allowed error");
            break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            console.log("to many attempt error");
            break;
    }
  }
}
