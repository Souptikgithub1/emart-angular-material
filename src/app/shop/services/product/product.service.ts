import { Injectable } from '@angular/core';
import {Http, RequestOptions, ResponseContentType} from "@angular/http";
import {Utils} from "../../utils/utils";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/internal/operators";

@Injectable()
export class ProductService {

  private endpoint: string = Utils.emartBaseUrl + 'productApi/';
  private searchEndpoint: string = Utils.emartBaseUrl + 'search/';

  private nodejsEndpoint: string = Utils.emartNodejsBaseUrl + 'products';
  constructor(private http: Http, private  httpClient: HttpClient) { }

  getProducts(params : object){
    const options = new RequestOptions({params: params});
    return this.http.get(this.endpoint + 'search', options).pipe(map(res => res.json()));
  }

  getProdcutDetails(productId: any){
    return this.http.get(this.endpoint + 'product/' + productId).pipe(map(res => res.json()));
  }

  add(requestBody: object){
    return this.http.post(this.endpoint + 'add', requestBody).pipe(map(res => res.json()));
  }
  addV2(requestBody: object){
    return this.http.post(this.nodejsEndpoint, requestBody).pipe(map(res => res.json()));
  }

  getAll(){
    return this.http.get(this.endpoint + 'product/getAll').pipe(map(res => res.json()));
  }

  getByBrandAndVertical(params: object){
    return this.http.get(this.endpoint + 'product/' + params['verticalId'] + "/" + params['brandId']).pipe(map(res => res.json()));
  }

  update(productBody: object){
    return this.http.put(this.endpoint + 'product/' + productBody['id'], productBody).pipe(map(res => res.json()));
  }

  deleteProduct(productId: number){
    return this.http.delete(this.endpoint + 'product/' + productId).pipe(map(res => res.json()));
  }

  updateProductState(productId: number){
    return this.http.put(this.endpoint + 'product/updateState/' + productId, {}).pipe(map(res => res.json()));
  }

  getSearchedProducts(params : object){
    const options = new RequestOptions({params: params});
    return this.http.get(this.endpoint + '?categoryId=' + params['categoryId']).pipe(map(res => res.json()));
  }
}
