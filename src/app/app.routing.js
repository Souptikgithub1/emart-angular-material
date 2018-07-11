"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var profile_component_1 = require("./profile/profile.component");
var signup_component_1 = require("./signup/signup.component");
var landing_component_1 = require("./landing/landing.component");
var nucleoicons_component_1 = require("./components/nucleoicons/nucleoicons.component");
var searchpage_component_1 = require("./searchpage/searchpage.component");
var edit_product_feature_names_component_1 = require("./admin/product/edit-product-feature-names/edit-product-feature-names.component");
var add_category_component_1 = require("./admin/add-category/add-category.component");
var add_brand_component_1 = require("./admin/brand/add-brand/add-brand.component");
var admin_home_component_1 = require("./admin/admin-home/admin-home.component");
var manage_product_component_1 = require("./admin/product/manage-product/manage-product.component");
var add_product_component_1 = require("./admin/product/add-product/add-product.component");
var edit_product_component_1 = require("./admin/product/edit-product/edit-product.component");
var add_product_feature_names_component_1 = require("./admin/product/add-product-feature-names/add-product-feature-names.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'search', component: searchpage_component_1.SearchpageComponent },
    {
        path: 'admin',
        children: [
            { path: '', component: admin_home_component_1.AdminHomeComponent },
            { path: 'add-category', component: add_category_component_1.AddCategoryComponent },
            { path: 'add-brand', component: add_brand_component_1.AddBrandComponent },
            { path: 'add-product-feature-names', component: add_product_feature_names_component_1.AddProductFeatureNamesComponent },
            { path: 'edit-product-feature-names', component: edit_product_feature_names_component_1.EditProductFeatureNamesComponent },
            { path: 'add-product', component: add_product_component_1.AddProductComponent },
            { path: 'manage-product', component: manage_product_component_1.ManageProductComponent },
            { path: 'edit-product/:productId', component: edit_product_component_1.EditProductComponent }
        ]
    },
    { path: 'user-profile', component: profile_component_1.ProfileComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'landing', component: landing_component_1.LandingComponent },
    { path: 'nucleoicons', component: nucleoicons_component_1.NucleoiconsComponent },
    { path: '', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [],
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
