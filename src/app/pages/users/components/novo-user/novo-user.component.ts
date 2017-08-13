import { USER } from './../../../../models/user.interface';
import { Router, ActivatedRoute } from '@angular/router';
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
  id: Number;
  user: USER
  checkId: Boolean = true;

  constructor(private _formBuilder: FormBuilder,
              private _userService: UserService,
              private _router: ActivatedRoute) { }

  ngOnInit() {
    this.formInit();
    const pegarId =  this._router.params.subscribe(params => { this.id = +params['id']});
    if (this.id) {
     this.editarUser();
    }
  }

  formInit() {
      this.userForm = this._formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      rg: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      data_nascimento: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      criado: [''],
      alterado: ['']
    });
  }

  novoUser(user) {
    if (!this.id) {
         user.criado = this.data;

         this._userService.novo(user)
                     .subscribe((res) => {
                        if (res.id !== undefined) {
                          alert(`Usuario ${res.nome} salvo com sucesso!`)
                          this.userForm.reset();
                        } else {
                          alert('Não foi possivel Salvar')
                        }
                      });
    }else {
      user.alterado = this.data;
      user.criado = this.user.criado;
      user.id = this.id;

      this._userService.alterar(user)
                       .subscribe(res => alert(`Alterado ${res.nome}, com sucesso!`))

      this.userForm.reset();
    }
  }

  editarUser() {
    this._userService.buscarId(this.id).subscribe((res) => {

      this.userForm.get('nome').patchValue(res.nome);
      this.userForm.get('email').patchValue(res.email);
      this.userForm.get('telefone').patchValue(res.telefone);
      this.userForm.get('celular').patchValue(res.celular);
      this.userForm.get('rg').patchValue(res.rg);
      this.userForm.get('cpf').patchValue(res.cpf);
      this.userForm.get('data_nascimento').patchValue(res.data_nascimento);
      this.userForm.get('senha').patchValue(res.senha);
      this.user = res;

    });
  }
}
