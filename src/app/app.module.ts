import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
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
import {ProductCardComponent} from "./shop/shared-partials/product-card/product-card.component";
import {HttpClientModule} from "@angular/common/http";
import {AdminHomeComponent} from "./admin/admin-home/admin-home.component";
import {AddCategoryComponent} from "./admin/add-category/add-category.component";
import {AddProductComponent} from "./admin/product/add-product/add-product.component";
import {AddProductFeatureNamesComponent} from "./admin/product/add-product-feature-names/add-product-feature-names.component";
import {AddBrandComponent} from "./admin/brand/add-brand/add-brand.component";
import {EditProductComponent} from "./admin/product/edit-product/edit-product.component";
import {EditProductFeatureNamesComponent} from "./admin/product/edit-product-feature-names/edit-product-feature-names.component";
import {ManageProductComponent} from "./admin/product/manage-product/manage-product.component";
import {ProductDetailsPageComponent} from "./shop/product-details-page/product-details-page.component";
import { RegisterSigninModalComponent } from './shop/register-signin-modal/register-signin-modal.component';
import { ProductCarouselComponent } from './shop/shared-partials/product-carousel/product-carousel.component';
import { RvpComponent } from './shop/shared-components/rvp/rvp.component';
import {BsModalService, ComponentLoaderFactory, ModalModule, PositioningService} from "ngx-bootstrap";

import {SocialLoginModule, AuthServiceConfig, AuthService} from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule, MatBadgeModule, MatFormFieldModule, MatDividerModule,
} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SigninComponent } from './shop/shared-components/signin/signin.component';
import { RegisterComponent } from './shop/shared-components/register/register.component';
import {UserService} from "./shop/services/user.service";
import { ProductCardDetailedComponent } from './shop/shared-partials/product-card-detailed/product-card-detailed.component';
import {ComponentsModule} from "./components/components.module";
import { HomepageComponent } from './shop/homepage/homepage.component';
import { BannerComponent } from './shop/shared-components/banner/banner.component';
import {BannerService} from "./shop/services/banner.service";
import { ProductDetailedCardSkeletonComponent } from './shop/shared-partials/product-detailed-card-skeleton/product-detailed-card-skeleton.component';
import { HomepageSkeletonComponent } from './shop/shared-partials/homepage-skeleton/homepage-skeleton.component';
import { BannerSkeletonComponent } from './shop/shared-partials/banner-skeleton/banner-skeleton.component';
import {RvpEventService} from "./shop/services/rvpEvent/rvp-event.service";
import { ManageProductPriceComponent } from './admin/product/manage-product-price/manage-product-price.component';
import { ProductPageSkeletonComponent } from './shop/shared-partials/product-page-skeleton/product-page-skeleton.component';
import 'hammerjs';
import {Ng5SliderModule} from "ng5-slider";
import {CartService} from "./shop/services/cart/cart.service";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {DeviceDetectorModule} from "ngx-device-detector";
import {NavSideMenuService} from "./shop/services/navSideMenu/nav-side-menu.service";
import { NavSideMenuComponent } from './shared/nav-side-menu/nav-side-menu.component';
import {NgMatSearchBarModule} from "ng-mat-search-bar";


@NgModule({
    exports: [
        MatButtonModule,
        MatTabsModule,
        MatBadgeModule,
        MatIconModule,
        MatSnackBarModule,
        MatSidenavModule,
        MatExpansionModule,
        MatListModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatDividerModule,
        MatRadioModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: []
})
export class MaterialModule {}


export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("257312850825-3ovgv5f9emeqnek6u51pcpgrqhpejuv1.apps.googleusercontent.com")
        },
        {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("685563628444166")
        }
    ]);
    return config;
}

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
        ManageProductComponent,
        ProductDetailsPageComponent,
        RegisterSigninModalComponent,
        ProductCarouselComponent,
        RvpComponent,
        SigninComponent,
        RegisterComponent,
        ProductCardDetailedComponent,
        HomepageComponent,
        BannerComponent,
        ProductDetailedCardSkeletonComponent,
        HomepageSkeletonComponent,
        BannerSkeletonComponent,
        ManageProductPriceComponent,
        ProductPageSkeletonComponent,
        NavSideMenuComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HomeModule,
        HttpModule,
        HttpClientModule,
        ModalModule,
        ComponentsModule,
        Ng5SliderModule,
        MaterialModule,
        DragDropModule,
        DeviceDetectorModule.forRoot(),
        NgMatSearchBarModule
        /*SocialLoginModule.initialize(config)*/
    ],
    entryComponents: [
        RegisterSigninModalComponent
    ],
    providers: [
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
        },
        AuthService,

        ComponentLoaderFactory,
        PositioningService,

        BsModalService,
        ProductService,
        CategoryService,
        BrandService,
        ProductFeatureCategoryService,
        ProductFeatureNamesService,
        ProductFeatureValueService,
        UserService,
        BannerService,

        RvpEventService,
        CartService,
        NavSideMenuService,

        RegisterSigninModalComponent
    ],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
