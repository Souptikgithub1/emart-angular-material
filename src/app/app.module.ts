import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './shop/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './shop/home/home.module';
import {CategoryService} from "./shop/services/category/category.service";
import {HttpModule} from "@angular/http";
import { HeaderComponent } from './shared/header/header.component';
import {BrandService} from "./shop/services/brand/brand.service";
import {ProductService} from "./shop/services/product/product.service";
import {ProductFeatureValueService} from "./shop/services/ProductFeatureValue/product-feature-value.service";
import {ProductFeatureCategoryService} from "./shop/services/productFeatureCategory/product-feature-category.service";
import {ProductFeatureNamesService} from "./shop/services/ProductFeatureNames/product-feature-names.service";
import {SearchpageComponent} from "./shop/searchpage/searchpage.component";
import {ProductCardComponent} from "./shop/product-card/product-card.component";
import {HttpClientModule} from "@angular/common/http";
import {AdminHomeComponent} from "./admin/admin-home/admin-home.component";
import {AddCategoryComponent} from "./admin/add-category/add-category.component";
import {AddProductComponent} from "./admin/product/add-product/add-product.component";
import {AddProductFeatureNamesComponent} from "./admin/product/add-product-feature-names/add-product-feature-names.component";
import {AddBrandComponent} from "./admin/brand/add-brand/add-brand.component";
import {EditProductComponent} from "./admin/product/edit-product/edit-product.component";
import {EditProductFeatureNamesComponent} from "./admin/product/edit-product-feature-names/edit-product-feature-names.component";
import {ManageProductComponent} from "./admin/product/manage-product/manage-product.component";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
      SearchpageComponent,
      ProductCardComponent,

      AdminHomeComponent,
      AddCategoryComponent,
      AddProductComponent,
      AddProductFeatureNamesComponent,
      AddBrandComponent,
      EditProductComponent,
      EditProductFeatureNamesComponent,
      ManageProductComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpModule,
      HttpClientModule
  ],
  providers: [
      ProductService,
      CategoryService,
      BrandService,
      ProductFeatureCategoryService,
      ProductFeatureNamesService,
      ProductFeatureValueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
