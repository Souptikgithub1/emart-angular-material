"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AddBrandComponent = (function () {
    function AddBrandComponent(brandService, router) {
        this.brandService = brandService;
        this.router = router;
    }
    AddBrandComponent.prototype.ngOnInit = function () {
    };
    AddBrandComponent.prototype.addBrand = function () {
        var _this = this;
        var requestBody = {
            brandName: this.brandName,
            brandDisplayName: this.brandDisplayName
        };
        this.brandService.add(requestBody).subscribe(function (response) {
            _this.router.navigate(['/admin']);
        });
    };
    return AddBrandComponent;
}());
AddBrandComponent = __decorate([
    core_1.Component({
        selector: 'app-add-brand',
        templateUrl: './add-brand.component.html',
        styleUrls: ['./add-brand.component.css']
    })
], AddBrandComponent);
exports.AddBrandComponent = AddBrandComponent;
