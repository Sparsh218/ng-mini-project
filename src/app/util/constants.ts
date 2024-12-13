export class Constants {

    private static readonly apiKey: string ="AIzaSyApl5CC1OZ9WqDE59-giSdyDctURkHnqrM";

    static readonly signUpUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+this.apiKey;

    static readonly signInUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+this.apiKey;
}