import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Utils} from "../../utils/utils";

@Injectable()
export class ProductFeatureNamesService {

  private endpoint: string;

  constructor(private http: Http) {
    this.endpoint = Utils.emartBaseUrl + 'productFeatureNames/';
  }

  addAll(requestBody: object){
    return this.http.post(this.endpoint + 'addAll', requestBody).map(res => res.json());
  }

  getByVerticalId(verticalId: number){
    return this.http.get(this.endpoint + 'get/' + verticalId).map(res => res.json());
  }

}
