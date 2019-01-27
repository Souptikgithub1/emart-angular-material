import { Component, OnInit } from '@angular/core';
import {BrandService} from "../../../shop/services/brand/brand.service";
import {CategoryService} from "../../../shop/services/category/category.service";
import {Router} from "@angular/router";
import {ProductFeatureValueService} from "../../../shop/services/ProductFeatureValue/product-feature-value.service";
import {ProductFeatureNamesService} from "../../../shop/services/ProductFeatureNames/product-feature-names.service";
import {ProductService} from "../../../shop/services/product/product.service";
import {ProductV2Service} from "../../../shop/services/product-v2/product-v2.service";

@Component({
  selector: 'app-add-product-v2',
  templateUrl: './add-product-v2.component.html',
  styleUrls: ['./add-product-v2.component.scss']
})
export class AddProductV2Component implements OnInit {

    brands = [];
    verticals = [];
    categories = [];
    productFeatureNames = [];


    // variables to store form values
    brandIndex: number;
    verticalIndex: number;
    categoryIndex: number;
    productName: string;
    sellingRate: number;
    mrp: number;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    images: Array<string> = [''];

    productFeatureValues = [];

    constructor(private brandService: BrandService,
                private categoryService: CategoryService,
                private productFeatureNamesService: ProductFeatureNamesService,
                private productFeatureValueService: ProductFeatureValueService,
                private productV2Service: ProductV2Service,
                private router: Router) { }

    ngOnInit() {
        this.getAllBrands();
        this.getAllVerticals();
    }

    getAllBrands(){
        this.brandService.getAll().subscribe(response => {
            this.brands = response;
        });
    }

    getAllVerticals(){
        this.categoryService.getVerticals().subscribe(response => {
            console.log(response);
            this.verticals = response;
        });
    }


    getLeafsByParentId(){
        this.categoryService.getLeafsByParentId(this.verticals[this.verticalIndex]['id']).subscribe(response => {
            this.categories = response;
        });
    }

    getFeatureNamesByVerticalId(){
        this.productFeatureNamesService.getByVerticalId(this.verticals[this.verticalIndex]['id']).subscribe(response => {
            console.log(response);
            this.productFeatureNames = response;
        });
    }



    addProduct(){
        //console.log(this.productFeatureNames);

        const product = {
            brand_id: this.brands[this.brandIndex]['id'],
            vertical_id: this.verticals[this.verticalIndex]['id'],
            category_id: this.categories[this.categoryIndex]['id'],
            product_name: this.productName,
            selling_rate: this.sellingRate,
            mrp: this.mrp,
            images: this.images,
            state: 1,
            feature_category_list: []
        };


        //saving a product
        this.productV2Service.add(product).subscribe(productrResponse => {



            this.router.navigate(['/admin']);

        });





    }

    onChangeVertical(){
        this.getLeafsByParentId();
        this.getFeatureNamesByVerticalId();
    }

    addBlankImage(){
      this.images.push('');
    }
    removeBlankImage(index){
      this.images.splice(index, 1);
    }
}
