import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpServerService } from '../../services/http-server/server.service';
import { StoreService } from '../store.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends StoreService {
  user: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private _httpServerService: HttpServerService) {
    super();
  }

  /* USER LOADED */
  setUser(user) {
    this.user.next(user);

    if (user) {
      if (user.token) {
        this._httpServerService.setToken(user.token);
      }
    }
  }

  update(params, remoteUpdate = true) {
    this.user.next({ ...this.user.getValue(), ...params });

    if (remoteUpdate) {
      // HTTP UPDATE //
      return this._httpServerService
        .put('users/' + this.user.getValue().id, params)
        .catch(this.error);
    }
  }

  onLogout() {
    localStorage.removeItem('token');
  }
}
