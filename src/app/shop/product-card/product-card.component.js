"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils_1 = require("../utils/utils");
var ProductCardComponent = (function () {
    function ProductCardComponent(router) {
        this.router = router;
        this.imgRoot = utils_1.Utils.imgRoot;
    }
    ProductCardComponent.prototype.ngOnInit = function () {
    };
    ProductCardComponent.prototype.onClickProductCard = function () {
        console.log(this.product);
        this.router.navigate(['/product/' + this.product.id]);
    };
    ProductCardComponent.prototype.onLoad = function () {
    };
    ProductCardComponent.prototype.openQuickViewModal = function () {
    };
    return ProductCardComponent;
}());
__decorate([
    core_1.Input('product')
], ProductCardComponent.prototype, "product", void 0);
ProductCardComponent = __decorate([
    core_1.Component({
        selector: 'app-product-card',
        templateUrl: './product-card.component.html',
        styleUrls: ['./product-card.component.css']
    })
], ProductCardComponent);
exports.ProductCardComponent = ProductCardComponent;
