import { Component, OnInit } from '@angular/core';
import {ProductFeatureCategoryService} from "../../../shop/services/productFeatureCategory/product-feature-category.service";
import {Router} from "@angular/router";
import {ProductFeatureNamesService} from "../../../shop/services/ProductFeatureNames/product-feature-names.service";
import {CategoryService} from "../../../shop/services/category/category.service";

@Component({
  selector: 'app-edit-product-feature-names',
  templateUrl: './edit-product-feature-names.component.html',
  styleUrls: ['./edit-product-feature-names.component.css']
})
export class EditProductFeatureNamesComponent implements OnInit {



  verticals = [];
  featureCategories = [];

  verticalId: number;
  featureNames: string;
  featureCategoryId: number;

  constructor(private categoryService: CategoryService,
              private productFeatureCategoryService: ProductFeatureCategoryService,
              private productFeatureNamesService: ProductFeatureNamesService,
              private router: Router) { }

  ngOnInit() {
    this.getVerticals();
  }

  getVerticals(){
    this.categoryService.getVerticals().subscribe(response => {
      //console.log(response);
      this.verticals = response;
    });
  }

  getFeatureCategories(verticalId){
    this.productFeatureCategoryService.getAllByVerticalId(verticalId).subscribe(response => {
      console.log(response);
      this.featureCategories = response;
    });
  }

  addProductFeatureName(){
    console.log(this.verticalId, this.featureCategoryId, this.featureNames);
    let requestBody = [];

    let featureNameArr = this.featureNames.split(',');

    let idCount = 1;
    for (let featureName of featureNameArr){

      featureName = featureName.trim();

      if(featureName != ' ' && featureName != '' && featureName != null && featureName != undefined){

        const featureNameObj = {
          id: -idCount++,
          prodVertId: this.verticalId,
          prodFeatureName: featureName,
          featureCategoryId: this.featureCategoryId
        };

        if(requestBody.length == 0){
          requestBody = [featureNameObj];
        }else{
          requestBody.push(featureNameObj);
        }
      }
    }

    console.log(requestBody);

    this.productFeatureNamesService.addAll(requestBody).subscribe(response => {
      console.log(response);
      this.router.navigate(['/admin']);
    });

  }

  onChangeAction(){
    console.log(this.verticalId);
    this.getFeatureCategories(this.verticalId);
  }

}
