import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/local/auth/auth.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePage implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit() {}

  onLogin() {
    this._authService.login();
  }
}
