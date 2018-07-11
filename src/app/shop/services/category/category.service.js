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
require("rxjs/add/operator/map");
var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        this.endpoint = utils_1.Utils.emartBaseUrl + 'category/';
    }
    CategoryService.prototype.add = function (category) {
        return this.http.post(this.endpoint + 'add', category).map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getAll = function () {
        return this.http.get(this.endpoint + 'getAll').map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getVerticals = function () {
        return this.http.get(this.endpoint + 'getAllVerticals').map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getLeafs = function () {
        return this.http.get(this.endpoint + 'getLeafs').map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getLeafsByParentId = function (parentId) {
        return this.http.get(this.endpoint + 'getLeafs/' + parentId).map(function (res) { return res.json(); });
    };
    CategoryService.prototype.getCategories = function () {
        return this.http.get(utils_1.Utils.emartBaseUrl + "productApi/categories").map(function (res) { return res.json(); });
    };
    return CategoryService;
}());
CategoryService = __decorate([
    core_1.Injectable()
], CategoryService);
exports.CategoryService = CategoryService;
