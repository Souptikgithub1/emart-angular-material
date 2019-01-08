import { Injectable } from '@angular/core';
import {Utils} from "../../utils/utils";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CartService {

    private endpoint: string;

  constructor(private http: HttpClient) {
      this.endpoint = Utils.emartBaseUrl + 'cart/';
  }

  add(cart: object){
    return this.http.post(this.endpoint, cart);
  }
}
