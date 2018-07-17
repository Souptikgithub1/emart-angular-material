import { Component, OnInit } from '@angular/core';
import {BannerService} from "../../services/banner.service";

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

    isLoaderVisible: boolean = true;
    banners: Array<object>;

    constructor(private bannerService: BannerService) { }

    ngOnInit() {
      this.getBanners();
    }

    getBanners(){
      this.bannerService.getAllBanners().subscribe(banners => {
        this.banners = banners;
        this.isLoaderVisible = false;
      });
    }
}
