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
var EditProductComponent = (function () {
    function EditProductComponent(activatedRoute, productService, brandService, categoryService, productFeatureValueService) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.brandService = brandService;
        this.categoryService = categoryService;
        this.productFeatureValueService = productFeatureValueService;
        this.productFeatureList = [];
        this.productSpecifications = [];
        this.brands = [];
        this.verticals = [];
        this.categories = [];
        this.imgRoot = utils_1.Utils.imgRoot;
    }
    EditProductComponent.prototype.ngOnInit = function () {
        this.getProductDetails();
    };
    EditProductComponent.prototype.getProductDetails = function () {
        var _this = this;
        this.productId = Number(this.activatedRoute.snapshot.paramMap.get('productId'));
        this.productService.getProdcutDetails(this.productId).subscribe(function (response) {
            //calling other details
            _this.getBrands();
            _this.getVerticals();
            //processing product details
            _this.productDetails = response[0];
            _this.productDetails['sellingRateParsed'] = _this.productDetails['sellingRate'] / 100;
            _this.productDetails['mrpParsed'] = _this.productDetails['mrp'] / 100;
            //setting product details values
            _this.brandId = _this.productDetails['brand']['id'];
            _this.verticalId = _this.productDetails['category']['parentId'];
            _this.categoryId = _this.productDetails['category']['id'];
            _this.productName = _this.productDetails['productName'];
            _this.sellingRate = _this.productDetails['sellingRate'];
            _this.mrp = _this.productDetails['mrp'];
            _this.image1 = _this.productDetails['image1'];
            _this.image2 = _this.productDetails['image2'];
            _this.image3 = _this.productDetails['image3'];
            _this.image4 = _this.productDetails['image4'];
            _this.image5 = _this.productDetails['image5'];
            _this.state = _this.productDetails['state'];
            _this.getProductFeatureNamesAndValues();
        });
    };
    EditProductComponent.prototype.getBrands = function () {
        var _this = this;
        this.brandService.getAll().subscribe(function (response) {
            _this.brands = response;
        });
    };
    EditProductComponent.prototype.getVerticals = function () {
        var _this = this;
        this.categoryService.getVerticals().subscribe(function (response) {
            _this.verticals = response;
            _this.getCategories();
        });
    };
    EditProductComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getLeafsByParentId(this.verticalId).subscribe(function (response) {
            _this.categories = response;
        });
    };
    EditProductComponent.prototype.getProductFeatureNamesAndValues = function () {
        var _this = this;
        this.productFeatureValueService.getProductFeatureNamesAndValues(this.productId, this.verticalId).subscribe(function (response) {
            console.log(response);
            _this.productFeatureList = response;
        });
    };
    EditProductComponent.prototype.updateProduct = function () {
        //setting brand
        var brand;
        for (var _i = 0, _a = this.brands; _i < _a.length; _i++) {
            var brnd = _a[_i];
            if (brnd.id === this.brandId) {
                brand = brnd;
                break;
            }
        }
        //setting category
        var category;
        for (var _b = 0, _c = this.categories; _b < _c.length; _b++) {
            var cat = _c[_b];
            if (cat.id === this.categoryId) {
                category = cat;
                break;
            }
        }
        var productBody = {
            id: this.productDetails['id'],
            brand: brand,
            verticalId: this.verticalId,
            category: category,
            productName: this.productName,
            sellingRate: this.sellingRate,
            mrp: this.mrp,
            image1: (this.image1 != undefined && this.image1 != null) ? this.image1 : '',
            image2: (this.image2 != undefined && this.image2 != null) ? this.image2 : '',
            image3: (this.image3 != undefined && this.image3 != null) ? this.image3 : '',
            image4: (this.image4 != undefined && this.image4 != null) ? this.image4 : '',
            image5: (this.image5 != undefined && this.image5 != null) ? this.image5 : '',
            state: this.state
        };
        //console.log(productBody);
        this.productService.update(productBody).subscribe(function (response) {
            location.reload();
        });
    };
    EditProductComponent.prototype.updateProductFeatures = function () {
        var productFeatureValuesBody = [];
        //building product feature value entity
        for (var _i = 0, _a = this.productFeatureList; _i < _a.length; _i++) {
            var productFeature = _a[_i];
            var feature = {
                id: productFeature['featureValueId'],
                prodFeatureId: productFeature['prodFeatureId'],
                productId: productFeature['productId'],
                prodFeatureValue: productFeature['prodFeatureValue']
            };
            if (productFeatureValuesBody.length == 0) {
                productFeatureValuesBody = [feature];
            }
            else {
                productFeatureValuesBody.push(feature);
            }
        }
        console.log(productFeatureValuesBody);
        //updating product feature values
        this.productFeatureValueService.updateAll(productFeatureValuesBody).subscribe(function (response) {
        });
    };
    EditProductComponent.prototype.onChangeVertical = function () {
    };
    return EditProductComponent;
}());
EditProductComponent = __decorate([
    core_1.Component({
        selector: 'app-edit-product',
        templateUrl: './edit-product.component.html',
        styleUrls: ['./edit-product.component.css']
    })
], EditProductComponent);
exports.EditProductComponent = EditProductComponent;
