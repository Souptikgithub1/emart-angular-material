import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class NavSideMenuService {

  private isSideMenuOpened: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isSideMenuOpenedObservable = this.isSideMenuOpened.asObservable();

  constructor() { }

  toggleSideMenu(status: boolean){
    this.isSideMenuOpened.next(status);
  }
}
