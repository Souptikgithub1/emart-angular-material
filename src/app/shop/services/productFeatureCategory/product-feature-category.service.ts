import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Utils} from "../../utils/utils";

@Injectable()
export class ProductFeatureCategoryService {

  private endpoint: string;

  constructor(private http: Http) {
    this.endpoint = Utils.emartBaseUrl + 'productFeatureCategory/';
  }

  getAllByVerticalId(verticalId: number){
    return this.http.get(this.endpoint + 'getAll/' + verticalId).map(res => res.json());
  }

}
