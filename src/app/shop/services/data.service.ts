import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Utils} from "../utils/utils";
import {map} from "rxjs/internal/operators";

@Injectable()
export class DataService {

  constructor(public http : Http) {
  }

  getPosts(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts").pipe(map(res => res.json()));
  }

  getCategories(){
    return this.http.get(Utils.emartBaseUrl + "productApi/categories").pipe(map(res => res.json()));
  }

  getBanner(){
    return this.http.get(Utils.emartBaseUrl + "productApi/banners").pipe(map(res => res.json()));
  }

}
