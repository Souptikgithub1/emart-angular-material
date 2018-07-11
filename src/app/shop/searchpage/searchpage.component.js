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
var SearchpageComponent = (function () {
    function SearchpageComponent(activatedRoute, router, productService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productService = productService;
        this.isModal = false;
        this.products = [];
        this.pageParams = [];
        this.imgRoot = utils_1.Utils.imgRoot;
    }
    SearchpageComponent.prototype.ngOnInit = function () {
        this.getProducts();
        this.getSearchedProducts();
    };
    SearchpageComponent.prototype.getProducts = function () {
        var _this = this;
        var catId;
        var page;
        var size;
        this.activatedRoute.queryParams.subscribe(function (params) {
            //fetching url params
            console.log(params.catId);
            catId = params.catId;
            page = (!!params.page || typeof params.page !== 'undefined') ? params.page - 1 : 0;
            size = (!!params.size || typeof params.size !== 'undefined') ? params.size : 12;
            //fetching data from api
            _this.productService.getProducts({ 'categoryId': catId, 'page': page, 'size': size }).subscribe(function (response) {
                var products = response.products;
                products.forEach(function (product, index) {
                    product.sellingRate = product.sellingRate / 100;
                    product.mrp = product.mrp / 100;
                });
                // build pagination strip
                _this.noOfPages = Number(response.noOfPages);
                _this.pageParams = [];
                for (var i = 0; i < _this.noOfPages; i++) {
                    var urlString = _this.generatePageUrl(i);
                    if (_this.pageParams.length > 0) {
                        _this.pageParams.push(urlString);
                    }
                    else {
                        _this.pageParams = [urlString];
                    }
                }
                // build pagination strip
                if (products.length > 0) {
                    _this.startCount = response.startCount;
                    _this.endCount = response.endCount;
                    _this.totalProductCount = response.totalProductCount;
                    _this.categoryName = (!!params.catId && params.catId !== 'undefined') ? response.products[0].category.name : 'All Products';
                    _this.searchResultName = (!!params.catId && params.catId !== 'undefined') ? response.products[0].category.searchResultName : 'All Products';
                }
                //console.log(this.searchResultName);
                _this.products = products;
                console.log(_this.products);
            });
        });
    };
    SearchpageComponent.prototype.generatePageUrl = function (pageNumber) {
        var urlParamsObj = utils_1.Utils.getUrlParamsAsObj();
        //console.log(urlParamsObj);
        var isPageAvailable = false;
        for (var param in urlParamsObj) {
            if (param === 'page') {
                isPageAvailable = true;
                urlParamsObj[param] = pageNumber + 1;
                break;
            }
        }
        if (!isPageAvailable) {
            Object.assign(urlParamsObj, { page: pageNumber + 1 });
        }
        return urlParamsObj;
    };
    SearchpageComponent.prototype.navigateToPage = function (pageParam) {
        //console.log(pageParam);
        this.router.navigate(['/search'], { queryParams: pageParam });
    };
    SearchpageComponent.prototype.openQuickViewModal = function (event) {
        this.isModal == true;
        $('#quickViewModal').modal('show');
        console.log(event);
    };
    SearchpageComponent.prototype.getSearchedProducts = function () {
        var _this = this;
        var catId;
        var page;
        var size;
        this.activatedRoute.queryParams.subscribe(function (params) {
            //fetching url params
            catId = params.catId;
            page = (!!params.page || typeof params.page !== 'undefined') ? params.page - 1 : 0;
            size = (!!params.size || typeof params.size !== 'undefined') ? params.size : 12;
            _this.productService.getSearchedProducts({ 'categoryId': catId, 'page': page, 'size': size }).subscribe(function (response) {
                console.log(response);
            }, function (error) { }, function () { });
        });
    };
    return SearchpageComponent;
}());
SearchpageComponent = __decorate([
    core_1.Component({
        selector: 'app-searchpage',
        templateUrl: './searchpage.component.html',
        styleUrls: ['./searchpage.component.css']
    })
], SearchpageComponent);
exports.SearchpageComponent = SearchpageComponent;
