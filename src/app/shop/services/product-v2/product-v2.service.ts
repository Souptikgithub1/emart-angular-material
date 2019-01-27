import { Injectable } from '@angular/core';
import {Utils} from "../../utils/utils";
import {map} from "rxjs/internal/operators";
import {Http, RequestOptions} from "@angular/http";

@Injectable({
    providedIn: 'root'
})
export class ProductV2Service {

    private nodejsEndpoint: string = Utils.emartNodejsBaseUrl + 'products/';
    constructor(private http: Http) { }

    add(requestBody: object){
        return this.http.post(this.nodejsEndpoint, requestBody).pipe(map(res => res.json()));
    }

    getProducts(params : object){
        console.log(params);
        const options = new RequestOptions({params: params});
        return this.http.post(this.nodejsEndpoint + 'search', params).pipe(map(res => res.json()));
    }
}
