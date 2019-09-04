import { Injectable } from '@angular/core';

import { UserService } from '../user/user.service';
import { HttpServerService } from '../../http-server/server.service';
import { MainService } from '../main.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends MainService {
  // store the URL so we can redirect after logging in
  redirectUrl: string = null;

  constructor(
    private _userService: UserService,
    private _httpServerService: HttpServerService
  ) {
    super();
  }

  userConnected() {
    return this._userService.user.getValue() !== null;
  }

  login(params = {}): Promise<any> {
    return this._httpServerService
      .post('users', params)
      .then(data => {
        console.log('data', data);
        this._userService.setUser(data);
        return data;
      })
      .catch(this.error);
  }
}
