import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class RvpEventService {

  private dataSrc = new BehaviorSubject('');
  public data = this.dataSrc.asObservable();

  constructor() { }

  notify(){
    this.dataSrc.next('visited');
  }
}
