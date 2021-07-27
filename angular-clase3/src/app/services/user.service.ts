import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) {
    console.log('Api github services');
  }

  getAll() : Observable<any> {
    return this.http.get(`${environment.urlApi}/users/imbi7py/followers`);
  }

}
