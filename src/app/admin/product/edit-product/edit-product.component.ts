import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../../shop/services/product/product.service";
import {Utils} from "../../../shop/utils/utils";
import {BrandService} from "../../../shop/services/brand/brand.service";
import {CategoryService} from "../../../shop/services/category/category.service";
import {ProductFeatureValueService} from "../../../shop/services/ProductFeatureValue/product-feature-value.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId: number;

  productDetails: object;
  imgRoot: string;

  productFeatureList = [];
  productSpecifications = [];


    productFeatureNames = [];

  brands = [];
  brandId: number;
  verticals = [];
  verticalId: number;
  categories = [];
  categoryId: number;
  productName: string;
  sellingRate: number;
  mrp: number;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  state: number;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private brandService: BrandService,
              private categoryService: CategoryService,
              private productFeatureValueService: ProductFeatureValueService) {
    this.imgRoot = Utils.imgRoot;
  }

  ngOnInit() {
    this.getProductDetails();


  }

  getProductDetails(){
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('productId'));
    this.productService.getProdcutDetails(this.productId).subscribe(response => {

      //calling other details
      this.getBrands();
      this.getVerticals();


      //processing product details
      this.productDetails = response;
      this.productDetails['sellingRateParsed'] = this.productDetails['sellingRate'] / 100;
      this.productDetails['mrpParsed'] = this.productDetails['mrp'] / 100;

      //setting product details values
      this.brandId = this.productDetails['brand']['id'];
      this.verticalId = this.productDetails['category']['parentId'];
      this.categoryId = this.productDetails['category']['id'];
      this.productName = this.productDetails['productName'];
      this.sellingRate = this.productDetails['sellingRate'];
      this.mrp = this.productDetails['mrp'];
      this.image1 = this.productDetails['image1'];
      this.image2 = this.productDetails['image2'];
      this.image3 = this.productDetails['image3'];
      this.image4 = this.productDetails['image4'];
      this.image5 = this.productDetails['image5'];
      this.state = this.productDetails['state'];


      this.getProductFeatureNamesAndValues();

    });
  }

  getBrands(){
    this.brandService.getAll().subscribe(response => {
      this.brands = response;
    });
  }

  getVerticals(){
    this.categoryService.getVerticals().subscribe(response => {
      this.verticals = response;
      this.getCategories();
    });
  }

  getCategories(){
    this.categoryService.getLeafsByParentId(this.verticalId).subscribe(response => {
        this.categories = response;
    });
  }

  getProductFeatureNamesAndValues(){
    this.productFeatureValueService.getProductFeatureNamesAndValues(this.productId, this.verticalId).subscribe(response => {
      console.log(response);

      this.productFeatureList = response;
    });
  }

  updateProduct(){

    //setting brand
    let brand;
    for(let brnd of this.brands){
      if(brnd.id === this.brandId){
        brand = brnd;
        break;
      }
    }

    //setting category
    let category;
    for(let cat of this.categories){
      if(cat.id === this.categoryId){
        category = cat;
        break;
      }
    }

    const productBody = {
      id: this.productDetails['id'],
      brand: brand,
      verticalId: this.verticalId,
      category: category,
      productName: this.productName,
      sellingRate: this.sellingRate,
      mrp: this.mrp,
      image1: (this.image1!=undefined && this.image1!=null) ? this.image1 : '',
      image2: (this.image2!=undefined && this.image2!=null) ? this.image2 : '',
      image3: (this.image3!=undefined && this.image3!=null) ? this.image3 : '',
      image4: (this.image4!=undefined && this.image4!=null) ? this.image4 : '',
      image5: (this.image5!=undefined && this.image5!=null) ? this.image5 : '',
      state: this.state
    };

    //console.log(productBody);
    this.productService.update(productBody).subscribe(response => {
      location.reload();
    });

  }

  updateProductFeatures(){
    let productFeatureValuesBody = [];


    //building product feature value entity
    for(let productFeature of this.productFeatureList){
      const feature = {
        id: productFeature['featureValueId'],
        prodFeatureId: productFeature['prodFeatureId'],
        productId: productFeature['productId'],
        prodFeatureValue: productFeature['prodFeatureValue']
      };

      if(productFeatureValuesBody.length == 0){
        productFeatureValuesBody = [feature];
      }else{
        productFeatureValuesBody.push(feature);
      }
    }


    console.log(productFeatureValuesBody);

    //updating product feature values
    this.productFeatureValueService.updateAll(productFeatureValuesBody).subscribe(response => {

    });

  }

  onChangeVertical(){

  }

}
