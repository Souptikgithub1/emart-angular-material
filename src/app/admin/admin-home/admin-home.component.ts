import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Utils} from "../../shop/utils/utils";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  private adminBaseRoute: string = Utils.adminBaseRoot;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToAddCategory(){
    this.router.navigate([this.adminBaseRoute + 'add-category']);
  }

  navigateToAddBrand(){
    this.router.navigate([this.adminBaseRoute + 'add-brand']);
  }

  navigateToAddProductFeatureNames(){
    this.router.navigate([this.adminBaseRoute + 'add-product-feature-names']);
  }
  navigateToEditProductFeatureNames(){
    this.router.navigate([this.adminBaseRoute + 'edit-product-feature-names']);
  }

  navigateToAddProduct(){
    this.router.navigate([this.adminBaseRoute + 'add-product']);
  }
  navigateToManageProduct(){
    this.router.navigate([this.adminBaseRoute + 'manage-product']);
  }
}
