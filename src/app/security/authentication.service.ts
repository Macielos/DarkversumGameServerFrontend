import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {ConfigService} from '../config/config.service';
import {AuthData} from './AuthData';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  login(username: string, password: string) {
    return this.httpClient.get<any>(this.configService.authenticationUrl + '?username=' + username + '&password=' + password,
      this.configService.httpOptions)
      .pipe(map(result => {
        // login successful if there's a user in the response
        if (result as boolean) {
          console.log('logged in as ' + username);

          // store user details and basic auth credentials in local storage
          // to keep user logged in between page refreshes
         // user.authdata = window.btoa(username + ':' + password);

          const user: AuthData = new AuthData();
          user.authdata = window.btoa(username + ':' + password);
          localStorage.setItem('currentUser', JSON.stringify(user));
        } else {
          console.log('failed to log in as ' + username);
        }
        return result;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
