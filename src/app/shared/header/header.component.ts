import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from "../../shop/services/category/category.service";
import {Utils} from "../../shop/utils/utils";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {RegisterSigninModalComponent} from "../../shop/register-signin-modal/register-signin-modal.component";
import {AuthService} from "angular4-social-login";
import {Router} from "@angular/router";
import {NavSideMenuService} from "../../shop/services/navSideMenu/nav-side-menu.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input('deviceType')
    deviceType: string = 'desktop';
    isCollapsed = true;
    @Input('categories')
    categories = [];
    isUserLoggedIn: boolean = false;
    userDetails: object;
    userFirstName: string;

    searchString: string;

    modalRef: BsModalRef;
    constructor(private router: Router,
                private categoryService: CategoryService,
                private bsModalService: BsModalService,
                private authService: AuthService,
                private navSideMenuService: NavSideMenuService) { }

    ngOnInit() {
        this.getUserDetails();
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

    onSearch(){
        this.router.navigate(['/search'], {queryParams: {'q': this.searchString} });
    }

    logout(){
        Utils.removeUserFromLocalStorage();
        this.authService.signOut();
        location.reload();
    }

    sidebarToggle(){
        this.navSideMenuService.toggleSideMenu(true);
    }

}
