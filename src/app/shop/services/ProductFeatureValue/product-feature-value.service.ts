import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Utils} from "../../utils/utils";

@Injectable()
export class ProductFeatureValueService {

  private endpoint: string;

  constructor(private http: Http) {
    this.endpoint = Utils.emartBaseUrl + 'productFeatureValue/';
  }

  addAll(productFeatureValueList: object){
    console.log(productFeatureValueList);
    return this.http.post(this.endpoint + 'addAll', productFeatureValueList).map(res => res.json());
  }

  getProductFeatureNamesAndValues(productId: number, prodVertId: number){
    return this.http.get(this.endpoint + 'getProductFeatureNamesAndValues/' + productId + '/' + prodVertId).map(res => res.json());
  }

  updateAll(productFeatureValuesBody: object){
    return this.http.put(this.endpoint + 'updateAll', productFeatureValuesBody).map(res => res.json());
  }
}
