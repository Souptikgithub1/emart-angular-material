"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AddProductFeatureNamesComponent = (function () {
    function AddProductFeatureNamesComponent(categoryService, productFeatureCategoryService, productFeatureNamesService, router) {
        this.categoryService = categoryService;
        this.productFeatureCategoryService = productFeatureCategoryService;
        this.productFeatureNamesService = productFeatureNamesService;
        this.router = router;
        this.verticals = [];
        this.featureCategories = [];
    }
    AddProductFeatureNamesComponent.prototype.ngOnInit = function () {
        this.getVerticals();
    };
    AddProductFeatureNamesComponent.prototype.getVerticals = function () {
        var _this = this;
        this.categoryService.getVerticals().subscribe(function (response) {
            //console.log(response);
            _this.verticals = response;
        });
    };
    AddProductFeatureNamesComponent.prototype.getFeatureCategories = function (verticalId) {
        var _this = this;
        this.productFeatureCategoryService.getAllByVerticalId(verticalId).subscribe(function (response) {
            console.log(response);
            _this.featureCategories = response;
        });
    };
    AddProductFeatureNamesComponent.prototype.addProductFeatureName = function () {
        var _this = this;
        console.log(this.verticalId, this.featureCategoryId, this.featureNames);
        var requestBody = [];
        var featureNameArr = this.featureNames.split(',');
        var idCount = 1;
        for (var _i = 0, featureNameArr_1 = featureNameArr; _i < featureNameArr_1.length; _i++) {
            var featureName = featureNameArr_1[_i];
            featureName = featureName.trim();
            if (featureName != ' ' && featureName != '' && featureName != null && featureName != undefined) {
                var featureNameObj = {
                    id: -idCount++,
                    prodVertId: this.verticalId,
                    prodFeatureName: featureName,
                    featureCategoryId: this.featureCategoryId
                };
                if (requestBody.length == 0) {
                    requestBody = [featureNameObj];
                }
                else {
                    requestBody.push(featureNameObj);
                }
            }
        }
        console.log(requestBody);
        this.productFeatureNamesService.addAll(requestBody).subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['/admin']);
        });
    };
    AddProductFeatureNamesComponent.prototype.onChangeAction = function () {
        console.log(this.verticalId);
        this.getFeatureCategories(this.verticalId);
    };
    return AddProductFeatureNamesComponent;
}());
AddProductFeatureNamesComponent = __decorate([
    core_1.Component({
        selector: 'app-add-product-feature-names',
        templateUrl: './add-product-feature-names.component.html',
        styleUrls: ['./add-product-feature-names.component.css']
    })
], AddProductFeatureNamesComponent);
exports.AddProductFeatureNamesComponent = AddProductFeatureNamesComponent;
