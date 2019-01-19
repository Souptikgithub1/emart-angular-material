import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NavSideMenuService} from "../../shop/services/navSideMenu/nav-side-menu.service";
import {MatSidenav} from "@angular/material";
import {Utils} from "../../shop/utils/utils";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {RegisterSigninModalComponent} from "../../shop/register-signin-modal/register-signin-modal.component";
import {AuthService} from "angular4-social-login";

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
    verticalItemIndex: number = 0;

    leaves = [];

    @ViewChild('drawer')
    drawer: MatSidenav;
    @ViewChild('verticalDrawer')
    verticalDrawer: MatSidenav;
    @ViewChild('leafDrawer')
    leafDrawer: MatSidenav;


    isUserLoggedIn: boolean = false;
    userDetails: object;
    userFirstName: string;
    modalRef: BsModalRef;
    constructor(private navSideMenuService: NavSideMenuService,
                private authService: AuthService,
                private bsModalService: BsModalService) {}

    ngOnInit() {
        this.getUserDetails();
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
        this.verticalItemIndex = i;
        this.leaves = this.categories[this.parentCatItemIndex]['child'][i]['child'];
        this.leafDrawer.toggle();
    }

    openModal(){
        this.modalRef = this.bsModalService.show(RegisterSigninModalComponent);
    }

    getUserDetails(){
        this.userDetails = Utils.getUserFromLocalStorage();
        console.log(this.userDetails);
        if(!!this.userDetails){
            this.userFirstName = this.userDetails['name'].split(' ')[0];
            this.isUserLoggedIn = true;
        }else{
            this.isUserLoggedIn = false;
        }
        this.bsModalService.hide(0);
    }

    logout(){
        Utils.removeUserFromLocalStorage();
        this.authService.signOut();
        location.reload();
    }

}
