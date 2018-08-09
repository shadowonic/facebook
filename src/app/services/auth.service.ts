import { Injectable } from '@angular/core';
import { FacebookService, LoginResponse } from 'ngx-facebook';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private fb: FacebookService) {
    console.log('Initializing Facebook');
  }
 public login() {
    this.fb.login()
      .then((res: LoginResponse) => {
        localStorage.setItem('testToken', res.authResponse.accessToken);
      })
      .catch(this.handleError);
  }
  public logout() {
    localStorage.removeItem('testToken');
  }
  private handleError(error) {
    console.error('Error in auth.service', error.message);
  }
}
