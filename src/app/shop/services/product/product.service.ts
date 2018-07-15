import { Injectable } from '@angular/core';
import {Http, RequestOptions, ResponseContentType} from "@angular/http";
import 'rxjs/add/operator/map';
import {Utils} from "../../utils/utils";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductService {

  private endpoint: string = Utils.emartBaseUrl + 'productApi/';
  private searchEndpoint: string = Utils.emartBaseUrl + 'search/';
  constructor(private http: Http, private  httpClient: HttpClient) { }

  getProducts(params : object){
    const options = new RequestOptions({params: params});
    return this.http.get(this.endpoint + 'search', options).map(res => res.json());
  }

  getProdcutDetails(productId: any){
    return this.http.get(this.endpoint + 'product/' + productId).map(res => res.json());
  }

  add(requestBody: object){
    return this.http.post(this.endpoint + 'add', requestBody).map(res => res.json());
  }

  getAll(){
    return this.http.get(this.endpoint + 'product/getAll').map(res => res.json());
  }

  update(productBody: object){
    return this.http.put(this.endpoint + 'product/' + productBody['id'], productBody).map(res => res.json());
  }

  deleteProduct(productId: number){
    return this.http.delete(this.endpoint + 'product/' + productId).map(res => res.json());
  }

  updateProductState(productId: number){
    return this.http.put(this.endpoint + 'product/updateState/' + productId, {}).map(res => res.json());
  }

  getSearchedProducts(params : object){
    const options = new RequestOptions({params: params});
    return this.http.get(this.endpoint + '?categoryId=' + params['categoryId']).map(res => res.json());
  }
}
