import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Utils} from "../../utils/utils";
import 'rxjs/Rx';

@Injectable()
export class CategoryService {


    private endpoint: string;

    constructor(private http: Http) {
        this.endpoint = Utils.emartBaseUrl + 'category/';
    }

    add(category: object){
        return this.http.post(this.endpoint + 'add', category).map(res => res.json());
    }

    getAll(){
        return this.http.get(this.endpoint + 'getAll').map(res => res.json());
    }

    getVerticals(){
        return this.http.get(this.endpoint + 'getAllVerticals').map(res => res.json());
    }

    getLeafs(){
        return this.http.get(this.endpoint + 'getLeafs').map(res => res.json());
    }

    getLeafsByParentId(parentId: number){
        return this.http.get(this.endpoint + 'getLeafs/' + parentId).map(res => res.json());
    }

    getCategories(){
        return this.http.get(Utils.emartBaseUrl + "productApi/categories").map(res => res.json());
    }

}
