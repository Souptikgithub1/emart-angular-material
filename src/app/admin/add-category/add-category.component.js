"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AddCategoryComponent = (function () {
    function AddCategoryComponent(categoryService, router) {
        this.categoryService = categoryService;
        this.router = router;
        this.parentCategories = [];
        this.searchResultName = "";
        this.state = true;
        this.isVertical = false;
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
        this.getAllCategories();
    };
    AddCategoryComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.categoryService.getAll().subscribe(function (response) {
            console.log(response);
            _this.parentCategories = response;
        });
    };
    AddCategoryComponent.prototype.submitForm = function () {
        var _this = this;
        console.log(this.name, this.parentCategoryId, this.searchResultName, this.state, this.isVertical);
        var requestBody = {
            id: -1,
            name: this.name,
            parentId: this.parentCategoryId,
            searchResultName: this.searchResultName,
            state: !!this.state ? 1 : 0,
            isVertical: !!this.isVertical ? 1 : 0
        };
        this.categoryService.add(requestBody).subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['/admin']);
        });
    };
    return AddCategoryComponent;
}());
AddCategoryComponent = __decorate([
    core_1.Component({
        selector: 'app-add-category',
        templateUrl: './add-category.component.html',
        styleUrls: ['./add-category.component.css']
    })
], AddCategoryComponent);
exports.AddCategoryComponent = AddCategoryComponent;
