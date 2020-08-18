import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  // tslint:disable-next-line: typedef
  createUser(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  // tslint:disable-next-line: typedef
  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout(): void{
    this.auth.signOut();
  }
  get authState() {
    return this.auth.authState;
  }
}
