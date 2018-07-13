import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Utils} from "../utils/utils";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {

  private endpoint = Utils.emartBaseUrl + 'user/';

  constructor(private http: Http) { }

  add(user: object){
    return this.http.post(this.endpoint, user).map(res => res.json());
  }

  login(email: string, password: string){
      return this.http.get(this.endpoint + 'login?email=' + email + '&password=' + password).map(res => res.json());
  }

}
