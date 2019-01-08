import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from "../../shop/services/category/category.service";
import {Utils} from "../../shop/utils/utils";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {RegisterSigninModalComponent} from "../../shop/register-signin-modal/register-signin-modal.component";
import {AuthService} from "angular4-social-login";
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input('deviceType')
    deviceType: string = 'desktop';
    isCollapsed = true;
    categories = [];
    isUserLoggedIn: boolean = false;
    userDetails: object;
    userFirstName: string;

    searchString: string;

    menuArray = [];

    modalRef: BsModalRef;
    constructor(private router: Router,
                private categoryService: CategoryService,
                private bsModalService: BsModalService,
                private authService: AuthService) { }

    ngOnInit() {
        this.getAllCategories();
        this.getUserDetails();
    }

    getAllCategories(){
        this.categoryService.getCategories().subscribe(response => {
            this.categories = response;
            console.log(Utils.getBaseDomain());
            let parentCount = 0;
            for(let parentCat of this.categories){
                if(parentCat['parentId'] == 0){
                    let obj1 = {'title': parentCat['name'], 'link': '#', 'subItems': []};
                    this.menuArray.push(obj1);

                    let verticalCount = 0;
                    for(let vertical of this.categories){
                        if(vertical['parentId'] == parentCat['id']){
                            let obj2 = {'title': vertical['name'], 'link': Utils.getBaseDomain()+'/search?catId=' + vertical['id'], 'subItems': []};
                            this.menuArray[parentCount]['subItems'].push(obj2);

                            let leafCount = 0;
                            for(let leaf of this.categories){
                                if(leaf['parentId'] == vertical['id']){
                                    let obj3 = {'title': leaf['name'], 'link': '/search?catId=' + leaf['id']};
                                    this.menuArray[parentCount]['subItems'][verticalCount]['subItems'].push(obj3);
                                    leafCount++;
                                }
                            }
                            verticalCount++;
                        }
                    }
                    parentCount++;
                }
            }
            console.log(this.menuArray);
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
        this.router.navigate(['/search'], {queryParams: {'q': this.searchString} });
    }

    logout(){
        Utils.removeUserFromLocalStorage();
        this.authService.signOut();
        location.reload();
    }

    public onMenuClose(){
        console.log("menu closed");
    }
    public onMenuOpen(){
        console.log("menu Opened");
    }
    private onItemSelect(item:any){
        console.log(item);
    }
}
