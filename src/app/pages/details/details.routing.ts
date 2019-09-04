import { Routes } from '@angular/router';
import { DetailsPage } from './details.component';
import { AuthGuard } from '../auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: DetailsPage,
    canActivate: [AuthGuard]
  }
];
