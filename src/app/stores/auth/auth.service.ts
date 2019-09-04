import { Injectable } from '@angular/core';

import { UserService } from '../user/user.service';
import { HttpServerService } from '../../services/http-server/server.service';
import { StoreService } from '../store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends StoreService {
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
      .post('users', params, { mock: true })
      .then(data => {
        console.log('data user', data);
        this._userService.setUser(data);
        return data;
      })
      .catch(this.error);
  }
}
