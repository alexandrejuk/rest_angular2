import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';

export const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: 'app/pages/login/login.module#LoginModule'
  // },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
          {
            path: '',
            redirectTo: 'pages',
            pathMatch: 'full'
          },
          {
            path: 'users',
            loadChildren: './users/users.module#UsersModule'
          }
    ]
  }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
