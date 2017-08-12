import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { NovoUserComponent } from './components/novo-user/novo-user.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
        {
          path: 'novo',
          component: NovoUserComponent
        }
    ]
  }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
