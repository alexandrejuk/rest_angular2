import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './../../../../shared/user/user.service';

@Component({
  selector: 'app-novo-user',
  templateUrl: './novo-user.component.html',
  styleUrls: ['./novo-user.component.css']
})
export class NovoUserComponent implements OnInit {

  userForm: FormGroup;
  data = new Date();
  users;

  constructor(private _formBuilder: FormBuilder, private _userService: UserService) { }

  ngOnInit() {
    this.form();
  }

  form() {
      this.userForm = this._formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      rg: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      data_nascimento: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      criado: ['']
    });
  }

  novoUser(user) {
    user.criado = this.data;
    this._userService.novo(user)
                     .subscribe((res) => {
                        if (res.id !== undefined) {
                        } else {
                          alert('Não foi possivel Salvar')
                        }
                      });
  }

}
