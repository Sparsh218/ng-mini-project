export class User {

    email: string;
    token: string;
    readonly expiresIn: Date;
    
    constructor(email: string, token: string, expiresIn: string) {
        this.email = email;
        this.token = token;
        this.expiresIn = new Date(Date.now() + (+expiresIn) * 1000);
    }
}