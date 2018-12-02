import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {Utils} from "../../utils/utils";
import {map} from "rxjs/internal/operators";


@Injectable()
export class ProductFeatureNamesService {

  private endpoint: string;

  constructor(private http: Http) {
    this.endpoint = Utils.emartBaseUrl + 'productFeatureNames/';
  }

  addAll(requestBody: object){
    return this.http.post(this.endpoint + 'addAll', requestBody).pipe(map(res => res.json()));
  }

  getByVerticalId(verticalId: number){
    return this.http.get(this.endpoint + 'get/' + verticalId).pipe(map(res => res.json()));
  }

  getByVerticalAndIsFilterable(verticalId: number, isFilterable: string){
    const params = {verticalId: verticalId, isFilterable: isFilterable};
    const options = new RequestOptions({params: params});
    return this.http.get(this.endpoint + 'get', options).pipe(map(res => res.json()));
  }

}
