import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NavSideMenuService} from "../../shop/services/navSideMenu/nav-side-menu.service";
import {MatSidenav} from "@angular/material";

declare var jquery: any;
declare var $ :any;

@Component({
    selector: 'app-nav-side-menu',
    templateUrl: './nav-side-menu.component.html',
    styleUrls: ['./nav-side-menu.component.scss']
})
export class NavSideMenuComponent implements OnInit {

    @Input('categories')
    categories = [];

    verticals = [];
    parentCatItemIndex: number = 0;

    leaves = [];

    @ViewChild('drawer')
    drawer: MatSidenav;
    @ViewChild('verticalDrawer')
    verticalDrawer: MatSidenav;
    @ViewChild('leafDrawer')
    leafDrawer: MatSidenav;

    constructor(private navSideMenuService: NavSideMenuService) {}

    ngOnInit() {

        this.navSideMenuService.isSideMenuOpenedObservable.subscribe(response => {
            if(!!response){
                this.drawer.open();
                $('.mat-drawer-backdrop').addClass('mat-drawer-shown');
            }else{
                this.drawer.close();
                $('.mat-drawer-backdrop').removeClass('mat-drawer-shown');
            }
        });
        $('body').on('click', '.mat-drawer-backdrop', () => this.closeSideNav());
    }

    closeSideNav(){
      this.navSideMenuService.toggleSideMenu(false);
      this.verticalDrawer.close();
      this.leafDrawer.close();
    }


    onClickParentCat(i){
        this.parentCatItemIndex = i;
        this.verticals = this.categories[i]['child'];
        this.verticalDrawer.toggle();
    }

    onClickVertical(i){
        this.leaves = this.categories[this.parentCatItemIndex]['child'][i]['child'];
        this.leafDrawer.toggle();
    }



}
