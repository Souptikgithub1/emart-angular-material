"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils_1 = require("../../utils/utils");
var AdminHomeComponent = (function () {
    function AdminHomeComponent(router) {
        this.router = router;
        this.adminBaseRoute = utils_1.Utils.adminBaseRoot;
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
    };
    AdminHomeComponent.prototype.navigateToAddCategory = function () {
        this.router.navigate([this.adminBaseRoute + 'add-category']);
    };
    AdminHomeComponent.prototype.navigateToAddBrand = function () {
        this.router.navigate([this.adminBaseRoute + 'add-brand']);
    };
    AdminHomeComponent.prototype.navigateToAddProductFeatureNames = function () {
        this.router.navigate([this.adminBaseRoute + 'add-product-feature-names']);
    };
    AdminHomeComponent.prototype.navigateToEditProductFeatureNames = function () {
        this.router.navigate([this.adminBaseRoute + 'edit-product-feature-names']);
    };
    AdminHomeComponent.prototype.navigateToAddProduct = function () {
        this.router.navigate([this.adminBaseRoute + 'add-product']);
    };
    AdminHomeComponent.prototype.navigateToManageProduct = function () {
        this.router.navigate([this.adminBaseRoute + 'manage-product']);
    };
    return AdminHomeComponent;
}());
AdminHomeComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-home',
        templateUrl: './admin-home.component.html',
        styleUrls: ['./admin-home.component.css']
    })
], AdminHomeComponent);
exports.AdminHomeComponent = AdminHomeComponent;
