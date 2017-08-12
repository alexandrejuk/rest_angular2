import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import RXJs
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
const url = 'http://localhost:3000'

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  novo(body) {
    const bodyString = JSON.stringify(body);
    const urlApi = `${url}/users`
    const headers = new Headers({'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });

    return this._http.post(urlApi, body, options)
              .map((res: Response) => res.json())
              .catch((err: any) => Observable
              .throw(err.json().err || 'Service Error'));
  }

  buscarTodos() {
   return this._http.get(`${url}/users`)
              .map((res: Response) => res.json())
              .catch((err) => Observable.throw(err.json().err || 'Service error'));
  }
}
