import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./details/details.module').then(mod => mod.DetailsModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./errors/error-404/error-404.module').then(
        mod => mod.Error404Module
      )
  }
];

export const appRoutingProviders: any[] = [AuthGuard];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
