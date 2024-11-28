export class SignUpRequest {

    email: string;
    password: string;
    returnSecureToken: boolean = true;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}