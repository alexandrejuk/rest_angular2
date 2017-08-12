import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserService } from './../../shared/user/user.service';
import { UsersComponent } from './users.component';
import { NovoUserComponent } from './components/novo-user/novo-user.component';
import { routing } from './users.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    UsersComponent,
    NovoUserComponent
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
