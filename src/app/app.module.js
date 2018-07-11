"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var router_1 = require("@angular/router");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var signup_component_1 = require("./signup/signup.component");
var landing_component_1 = require("./landing/landing.component");
var profile_component_1 = require("./profile/profile.component");
var navbar_component_1 = require("./shared/navbar/navbar.component");
var footer_component_1 = require("./shared/footer/footer.component");
var home_module_1 = require("./home/home.module");
var category_service_1 = require("./services/category/category.service");
var http_1 = require("@angular/http");
var header_component_1 = require("./shared/header/header.component");
var brand_service_1 = require("./services/brand/brand.service");
var product_service_1 = require("./services/product/product.service");
var product_feature_value_service_1 = require("./services/ProductFeatureValue/product-feature-value.service");
var product_feature_category_service_1 = require("./services/productFeatureCategory/product-feature-category.service");
var product_feature_names_service_1 = require("./services/ProductFeatureNames/product-feature-names.service");
var searchpage_component_1 = require("./searchpage/searchpage.component");
var product_card_component_1 = require("./product-card/product-card.component");
var http_2 = require("@angular/common/http");
var admin_home_component_1 = require("./admin/admin-home/admin-home.component");
var add_category_component_1 = require("./admin/add-category/add-category.component");
var add_product_component_1 = require("./admin/product/add-product/add-product.component");
var add_product_feature_names_component_1 = require("./admin/product/add-product-feature-names/add-product-feature-names.component");
var add_brand_component_1 = require("./admin/brand/add-brand/add-brand.component");
var edit_product_component_1 = require("./admin/product/edit-product/edit-product.component");
var edit_product_feature_names_component_1 = require("./admin/product/edit-product-feature-names/edit-product-feature-names.component");
var manage_product_component_1 = require("./admin/product/manage-product/manage-product.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            signup_component_1.SignupComponent,
            landing_component_1.LandingComponent,
            profile_component_1.ProfileComponent,
            navbar_component_1.NavbarComponent,
            footer_component_1.FooterComponent,
            header_component_1.HeaderComponent,
            searchpage_component_1.SearchpageComponent,
            product_card_component_1.ProductCardComponent,
            admin_home_component_1.AdminHomeComponent,
            add_category_component_1.AddCategoryComponent,
            add_product_component_1.AddProductComponent,
            add_product_feature_names_component_1.AddProductFeatureNamesComponent,
            add_brand_component_1.AddBrandComponent,
            edit_product_component_1.EditProductComponent,
            edit_product_feature_names_component_1.EditProductFeatureNamesComponent,
            manage_product_component_1.ManageProductComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            forms_1.FormsModule,
            router_1.RouterModule,
            app_routing_1.AppRoutingModule,
            home_module_1.HomeModule,
            http_1.HttpModule,
            http_2.HttpClientModule
        ],
        providers: [
            product_service_1.ProductService,
            category_service_1.CategoryService,
            brand_service_1.BrandService,
            product_feature_category_service_1.ProductFeatureCategoryService,
            product_feature_names_service_1.ProductFeatureNamesService,
            product_feature_value_service_1.ProductFeatureValueService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
