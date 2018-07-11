import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Utils} from "../utils/utils";

@Injectable()
export class DataService {

  constructor(public http : Http) {
  }

  getPosts(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts").map(res => res.json());
  }

  getCategories(){
    return this.http.get(Utils.emartBaseUrl + "productApi/categories").map(res => res.json());
  }

  getBanner(){
    return this.http.get(Utils.emartBaseUrl + "productApi/banners").map(res => res.json());
  }

}
