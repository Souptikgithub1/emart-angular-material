import { Injectable } from '@angular/core';
import {Utils} from "../utils/utils";
import {Http} from "@angular/http";
import {map} from "rxjs/internal/operators";

@Injectable()
export class BannerService {

  private endpoint = Utils.emartBaseUrl + 'banner';

  constructor(private http: Http) { }

  getAllBanners(){
    return this.http.get(this.endpoint).pipe(map(res => res.json()));
  }
}
