"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils_1 = require("../../../utils/utils");
var ManageProductComponent = (function () {
    function ManageProductComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.products = [];
        this.adminBaseRoot = utils_1.Utils.adminBaseRoot;
    }
    ManageProductComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
    };
    ManageProductComponent.prototype.getAllProducts = function () {
        var _this = this;
        this.productService.getAll().subscribe(function (response) {
            console.log(response);
            _this.products = response;
        });
    };
    ManageProductComponent.prototype.editProduct = function (productId) {
        this.router.navigate([this.adminBaseRoot + 'edit-product/' + productId]);
    };
    ManageProductComponent.prototype.deleteProduct = function (productId) {
        var _this = this;
        this.productService.deleteProduct(productId).subscribe(function (response) {
            if (!!response) {
                _this.getAllProducts();
            }
        });
    };
    ManageProductComponent.prototype.toggleProductState = function (product) {
        this.productService.updateProductState(product['id']).subscribe(function (response) {
            if (!!response) {
                if (product['state'] === '1') {
                    product['state'] = '0';
                }
                else {
                    product['state'] = '1';
                }
            }
        });
        console.log(product['id']);
    };
    return ManageProductComponent;
}());
ManageProductComponent = __decorate([
    core_1.Component({
        selector: 'app-manage-product',
        templateUrl: './manage-product.component.html',
        styleUrls: ['./manage-product.component.css']
    })
], ManageProductComponent);
exports.ManageProductComponent = ManageProductComponent;
