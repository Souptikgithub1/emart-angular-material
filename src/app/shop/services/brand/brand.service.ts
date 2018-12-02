import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Utils} from "../../utils/utils";
import {map} from "rxjs/internal/operators";

@Injectable()
export class BrandService {

  private endpoint: string;

  constructor(private http: Http) {
    this.endpoint = Utils.emartBaseUrl + 'brand/'
  }

  add(brand: object){
    return this.http.post(this.endpoint + 'add', brand).pipe(map(res => res.json()));
  }

  getAll(){
    return this.http.get(this.endpoint + 'getAll').pipe(map(res => res.json()));
  }

}
