import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from './../../shared/user/user.service';
import { UsersComponent } from './users.component';
import { NovoUserComponent } from './components/novo-user';
import { routing } from './users.routing';
import { GerenciarComponent } from './components/gerenciar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    UsersComponent,
    NovoUserComponent,
    GerenciarComponent
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
