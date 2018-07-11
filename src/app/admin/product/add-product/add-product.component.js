"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AddProductComponent = (function () {
    function AddProductComponent(brandService, categoryService, productFeatureNamesService, productFeatureValueService, productService, router) {
        this.brandService = brandService;
        this.categoryService = categoryService;
        this.productFeatureNamesService = productFeatureNamesService;
        this.productFeatureValueService = productFeatureValueService;
        this.productService = productService;
        this.router = router;
        this.brands = [];
        this.verticals = [];
        this.categories = [];
        this.productFeatureNames = [];
        this.productFeatureValues = [];
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.getAllBrands();
        this.getAllVerticals();
    };
    AddProductComponent.prototype.getAllBrands = function () {
        var _this = this;
        this.brandService.getAll().subscribe(function (response) {
            _this.brands = response;
        });
    };
    AddProductComponent.prototype.getAllVerticals = function () {
        var _this = this;
        this.categoryService.getVerticals().subscribe(function (response) {
            console.log(response);
            _this.verticals = response;
        });
    };
    AddProductComponent.prototype.getLeafsByParentId = function () {
        var _this = this;
        this.categoryService.getLeafsByParentId(this.verticals[this.verticalIndex]['id']).subscribe(function (response) {
            _this.categories = response;
        });
    };
    AddProductComponent.prototype.getFeatureNamesByVerticalId = function () {
        var _this = this;
        this.productFeatureNamesService.getByVerticalId(this.verticals[this.verticalIndex]['id']).subscribe(function (response) {
            console.log(response);
            _this.productFeatureNames = response;
        });
    };
    AddProductComponent.prototype.addProduct = function () {
        //console.log(this.productFeatureNames);
        var _this = this;
        var product = {
            id: -1,
            brand: this.brands[this.brandIndex],
            verticalId: this.verticals[this.verticalIndex]['id'],
            category: this.categories[this.categoryIndex],
            productName: this.productName,
            sellingRate: this.sellingRate,
            mrp: this.mrp,
            image1: (this.image1 != undefined && this.image1 != null) ? this.image1 : '',
            image2: (this.image2 != undefined && this.image2 != null) ? this.image2 : '',
            image3: (this.image3 != undefined && this.image3 != null) ? this.image3 : '',
            image4: (this.image4 != undefined && this.image4 != null) ? this.image4 : '',
            image5: (this.image5 != undefined && this.image5 != null) ? this.image5 : '',
            state: 1
        };
        //saving a product
        this.productService.add(product).subscribe(function (productrResponse) {
            console.log(productrResponse);
            _this.productFeatureValues = [];
            var idCount = -1;
            for (var _i = 0, _a = _this.productFeatureNames; _i < _a.length; _i++) {
                var feature = _a[_i];
                //feature value entry to be inserted in the db
                var featureValueEntry = {
                    id: idCount--,
                    prodFeatureId: feature.id,
                    productId: productrResponse['id'],
                    prodFeatureValue: (feature.value != undefined && feature.value != null) ? feature.value : ' ',
                };
                if (_this.productFeatureValues.length < 1) {
                    _this.productFeatureValues = [featureValueEntry];
                }
                else {
                    _this.productFeatureValues.push(featureValueEntry);
                }
            }
            // saving product features
            _this.productFeatureValueService.addAll(_this.productFeatureValues).subscribe(function (response) {
                console.log(response);
            });
            _this.router.navigate(['/admin']);
        });
    };
    AddProductComponent.prototype.onChangeVertical = function () {
        this.getLeafsByParentId();
        this.getFeatureNamesByVerticalId();
    };
    return AddProductComponent;
}());
AddProductComponent = __decorate([
    core_1.Component({
        selector: 'app-add-product',
        templateUrl: './add-product.component.html',
        styleUrls: ['./add-product.component.css']
    })
], AddProductComponent);
exports.AddProductComponent = AddProductComponent;
