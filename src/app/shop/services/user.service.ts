import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {Utils} from "../utils/utils";
import {map} from "rxjs/internal/operators";

@Injectable()
export class UserService {

    private endpoint = Utils.emartBaseUrl + 'user/';

    constructor(private http: Http) { }

    add(user: object){
        return this.http.post(this.endpoint, user).pipe(map(res => res.json()));
    }

    login(userPayload: object){
        const options = new RequestOptions({params: userPayload});
        return this.http.get(this.endpoint + '/login', options).pipe(map(res => res.json()));
    }

}
