import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../shared/user/user.service';

@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./gerenciar.component.css']
})
export class GerenciarComponent implements OnInit {

  users;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.buscarTodos()
                     .subscribe(res => {
                       if (res === undefined) {
                         alert('Não foi possivel trazer os dados')
                       }else {
                         return this.users = res;
                       }
                     })

  }

}
