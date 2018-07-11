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
var ProductFeatureNamesService = (function () {
    function ProductFeatureNamesService(http) {
        this.http = http;
        this.endpoint = utils_1.Utils.emartBaseUrl + 'productFeatureNames/';
    }
    ProductFeatureNamesService.prototype.addAll = function (requestBody) {
        return this.http.post(this.endpoint + 'addAll', requestBody).map(function (res) { return res.json(); });
    };
    ProductFeatureNamesService.prototype.getByVerticalId = function (verticalId) {
        return this.http.get(this.endpoint + 'get/' + verticalId).map(function (res) { return res.json(); });
    };
    return ProductFeatureNamesService;
}());
ProductFeatureNamesService = __decorate([
    core_1.Injectable()
], ProductFeatureNamesService);
exports.ProductFeatureNamesService = ProductFeatureNamesService;
