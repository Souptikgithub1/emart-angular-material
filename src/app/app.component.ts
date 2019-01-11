import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from "rxjs/index";
import 'rxjs/operators';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {DeviceDetectorService} from "ngx-device-detector";
import {CategoryService} from "./shop/services/category/category.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    deviceType: string = 'desktop';
    private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    categories = [];
    menuArr = [];

    constructor( private renderer : Renderer,
                 private router: Router,
                 @Inject(DOCUMENT,) private document: any,
                 private element : ElementRef,
                 public location: Location,
                 private deviceDetectorService: DeviceDetectorService,
                 private categoryService: CategoryService) {}
    ngOnInit() {
        console.log(this.deviceDetectorService.isDesktop(),
            this.deviceDetectorService.isMobile(),
            this.deviceDetectorService.isTablet());
        if(!!this.deviceDetectorService.isDesktop()){
            this.deviceType = 'desktop';
        }else if(!!this.deviceDetectorService.isMobile()){
            this.deviceType = 'mobile';
        }else{
            this.deviceType = 'tablet';
        }
        this.getAllCategories();


        /*var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }else{
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', (event) => {
            const number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            } else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');

        }*/

    }

    getAllCategories(){
        this.categoryService.getCategories().subscribe(response => {
            this.categories = response;
            let parentCount = 0;
            for(let parentCat of response){
                if(parentCat['parentId'] == 0){
                    let parentCatObj = {id: parentCat['id'], name: parentCat['name'], child: []};
                    this.menuArr.push(parentCatObj);

                    let verticalCount = 0;
                    for(let vertical of response){
                        if(vertical['parentId'] == parentCat['id']){
                            let verticalObj = {id: vertical['id'], name: vertical['name'], child: []};
                            this.menuArr[parentCount]['child'].push(verticalObj);

                            for(let leaf of response){
                                if(leaf['parentId'] == vertical['id']){
                                    let leafObj = {id: leaf['id'], name: leaf['name']};
                                    this.menuArr[parentCount]['child'][verticalCount]['child'].push(leafObj);
                                }
                            }
                        verticalCount++;
                        }
                    }
                parentCount++;
                }
            }
        });
    }

    removeFooter() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if(titlee === 'signup' || titlee === 'nucleoicons'){
            return false;
        }
        else {
            return true;
        }
    }
}
