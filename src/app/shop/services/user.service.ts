import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {Utils} from "../utils/utils";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {

    private endpoint = Utils.emartBaseUrl + 'user/';

    constructor(private http: Http) { }

    add(user: object){
        return this.http.post(this.endpoint, user).map(res => res.json());
    }

    login(userPayload: object){
        const options = new RequestOptions({params: userPayload});
        return this.http.get(this.endpoint + '/login', options).map(res => res.json());
    }

}
