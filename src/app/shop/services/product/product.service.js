"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var utils_1 = require("../../utils/utils");
var ProductService = (function () {
    function ProductService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.endpoint = utils_1.Utils.emartBaseUrl + 'productApi/';
        this.searchEndpoint = utils_1.Utils.emartBaseUrl + 'search/';
    }
    ProductService.prototype.getProducts = function (params) {
        var options = new http_1.RequestOptions({ params: params });
        return this.http.get(this.endpoint + 'search', options).map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProdcutDetails = function (productId) {
        return this.http.get(this.endpoint + 'product/' + productId).map(function (res) { return res.json(); });
    };
    ProductService.prototype.add = function (requestBody) {
        return this.http.post(this.endpoint + 'add', requestBody).map(function (res) { return res.json(); });
    };
    ProductService.prototype.getAll = function () {
        return this.http.get(this.endpoint + 'product/getAll').map(function (res) { return res.json(); });
    };
    ProductService.prototype.update = function (productBody) {
        return this.http.put(this.endpoint + 'product/' + productBody['id'], productBody).map(function (res) { return res.json(); });
    };
    ProductService.prototype.deleteProduct = function (productId) {
        return this.http.delete(this.endpoint + 'product/' + productId).map(function (res) { return res.json(); });
    };
    ProductService.prototype.updateProductState = function (productId) {
        return this.http.put(this.endpoint + 'product/updateState/' + productId, {}).map(function (res) { return res.json(); });
    };
    ProductService.prototype.getSearchedProducts = function (params) {
        var options = new http_1.RequestOptions({ params: params });
        return this.httpClient.get(this.searchEndpoint + '?categoryId=' + params['categoryId']);
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable()
], ProductService);
exports.ProductService = ProductService;
