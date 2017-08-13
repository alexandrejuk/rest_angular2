import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { NovoUserComponent } from './components/novo-user';
import { GerenciarComponent } from './components/gerenciar';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
        {
          path: 'novo',
          component: NovoUserComponent
        },
        {
          path: 'alterar/:id',
          component: NovoUserComponent
        },
        {
          path: 'gerenciar',
          component: GerenciarComponent
        }
    ]
  }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
