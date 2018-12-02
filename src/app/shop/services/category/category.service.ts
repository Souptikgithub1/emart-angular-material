import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Utils} from "../../utils/utils";
import {map} from "rxjs/internal/operators";

@Injectable()
export class CategoryService {

  private endpoint: string;

  constructor(private http: Http) {
    this.endpoint = Utils.emartBaseUrl + 'category/';
  }

  add(category: object){
    return this.http.post(this.endpoint + 'add', category).pipe(map(res => res.json()));
  }

  getAll(){
    return this.http.get(this.endpoint + 'getAll').pipe(map(res => res.json()));
  }

  getCategory(id: string){
    return this.http.get(this.endpoint + 'get/' + id).pipe(map(res => res.json()));
  }

  getVerticals(){
    return this.http.get(this.endpoint + 'getAllVerticals').pipe(map(res => res.json()));
  }

  getLeafs(){
    return this.http.get(this.endpoint + 'getLeafs').pipe(map(res => res.json()));
  }

  getLeafsByParentId(parentId: number){
    return this.http.get(this.endpoint + 'getLeafs/' + parentId).pipe(map(res => res.json()));
  }

    getCategories(){
        return this.http.get(Utils.emartBaseUrl + "productApi/categories").pipe(map(res => res.json()));
    }

}
