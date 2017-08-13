import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// import RXJs
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
private url = 'http://localhost:3000'
  constructor(private _http: Http) { }

  novo(body) {
    const bodyString = JSON.stringify(body);
    const urlApi = `${this.url}/users`
    const headers = new Headers({'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });

    return this._http.post(urlApi, body, options)
                     .map((res: Response) => res.json())
                     .catch((err: any) => Observable
                     .throw(err.json().err || 'Service Error'));
  }

  alterar(body) {
    const bodyString = JSON.stringify(body);
    const urlApi = `${this.url}/users/${body.id}/`
    const headers = new Headers({'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers });

    return this._http.put(urlApi, body, options)
                     .map((res: Response) => res.json())
                     .catch((err: any) => Observable
                     .throw(err.json().err || 'Service Error'));
  }



  buscarTodos() {
   return this._http.get(`${this.url}/users`)
                    .map((res: Response) => res.json())
                    .catch((err) => Observable
                    .throw(err.json().err || 'Service error'));
  }

  buscarId(id) {
   return this._http.get(`${this.url}/users/${id}`)
                    .map((res: Response) => res.json())
                    .catch((err) => Observable
                    .throw(err.json().err || 'Service error'));
  }

  deleteId(id) {
   return this._http.delete(`${this.url}/users/${id}`)
                    .map((res: Response) => res.json())
                    .catch((err) => Observable
                    .throw(err.json().err || 'Service error'));
  }
}
