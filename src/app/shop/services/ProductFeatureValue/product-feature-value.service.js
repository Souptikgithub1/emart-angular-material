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
var ProductFeatureValueService = (function () {
    function ProductFeatureValueService(http) {
        this.http = http;
        this.endpoint = utils_1.Utils.emartBaseUrl + 'productFeatureValue/';
    }
    ProductFeatureValueService.prototype.addAll = function (productFeatureValueList) {
        console.log(productFeatureValueList);
        return this.http.post(this.endpoint + 'addAll', productFeatureValueList).map(function (res) { return res.json(); });
    };
    ProductFeatureValueService.prototype.getProductFeatureNamesAndValues = function (productId, prodVertId) {
        return this.http.get(this.endpoint + 'getProductFeatureNamesAndValues/' + productId + '/' + prodVertId).map(function (res) { return res.json(); });
    };
    ProductFeatureValueService.prototype.updateAll = function (productFeatureValuesBody) {
        return this.http.put(this.endpoint + 'updateAll', productFeatureValuesBody).map(function (res) { return res.json(); });
    };
    return ProductFeatureValueService;
}());
ProductFeatureValueService = __decorate([
    core_1.Injectable()
], ProductFeatureValueService);
exports.ProductFeatureValueService = ProductFeatureValueService;
