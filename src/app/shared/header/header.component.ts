import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../shop/services/category/category.service";
import {Utils} from "../../shop/utils/utils";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {RegisterSigninModalComponent} from "../../shop/register-signin-modal/register-signin-modal.component";
import {AuthService} from "angular4-social-login";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    categories = [];
    isUserLoggedIn: boolean = false;
    userDetails: object;
    userFirstName: string;

    searchString: string;

    modalRef: BsModalRef;
    constructor(private categoryService: CategoryService,
                private bsModalService: BsModalService,
                private authService: AuthService) { }

    ngOnInit() {
        this.getAllCategories();
        this.getUserDetails();
    }

    getAllCategories(){
        this.categoryService.getCategories().subscribe(response => {
            this.categories = response;
        });
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
        let searchArr = this.searchString.split(' ');
        console.log(searchArr);
    }

    logout(){
        Utils.removeUserFromLocalStorage();
        this.authService.signOut();
        location.reload();
    }
}
