import { Component, OnInit } from '@angular/core';

import { UserService } from './../../../../shared/user/user.service';
import { USER } from './../../../../models/user.interface';

@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./gerenciar.component.css']
})
export class GerenciarComponent implements OnInit {

  users: USER;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this._userService.buscarTodos()
                     .subscribe(res => {
                        if (res === undefined) {
                          alert('Não foi possivel trazer os dados')
                        }else {
                          return this.users = res;
                        }
                    });

  }

  // remover(id) {
  //   this._userService.deleteId(id)
  //                    .subscribe(res => {
  //                          alert(`Usuário ${res.nome}, removido com sucesso!`)
  //                    });

  // }

}
