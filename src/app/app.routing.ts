import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shop/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import {SearchpageComponent} from "./shop/searchpage/searchpage.component";
import {EditProductFeatureNamesComponent} from "./admin/product/edit-product-feature-names/edit-product-feature-names.component";
import {AddCategoryComponent} from "./admin/add-category/add-category.component";
import {AddBrandComponent} from "./admin/brand/add-brand/add-brand.component";
import {AdminHomeComponent} from "./admin/admin-home/admin-home.component";
import {ManageProductComponent} from "./admin/product/manage-product/manage-product.component";
import {AddProductComponent} from "./admin/product/add-product/add-product.component";
import {EditProductComponent} from "./admin/product/edit-product/edit-product.component";
import {AddProductFeatureNamesComponent} from "./admin/product/add-product-feature-names/add-product-feature-names.component";
import {ProductCardComponent} from "./shop/shared-partials/product-card/product-card.component";
import {ProductDetailsPageComponent} from "./shop/product-details-page/product-details-page.component";

const routes: Routes =[
    { path: '',             component: HomeComponent },
    { path: 'search',  component: SearchpageComponent},
    { path: 'product/:productId',  component: ProductDetailsPageComponent},

    {
        path: 'admin',

        children: [
            {path: '', component: AdminHomeComponent},
            {path: 'add-category', component: AddCategoryComponent},
            {path: 'add-brand', component: AddBrandComponent},

            {path: 'add-product-feature-names', component: AddProductFeatureNamesComponent},
            {path: 'edit-product-feature-names', component: EditProductFeatureNamesComponent},

            {path: 'add-product', component: AddProductComponent},
            {path: 'manage-product', component: ManageProductComponent},
            {path: 'edit-product/:productId', component: EditProductComponent}
        ]
    },

    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
