import { Component, OnInit } from '@angular/core';
import {BrandService} from "../../../shop/services/brand/brand.service";
import {CategoryService} from "../../../shop/services/category/category.service";
import {ProductFeatureNamesService} from "../../../shop/services/ProductFeatureNames/product-feature-names.service";
import {ProductFeatureValueService} from "../../../shop/services/ProductFeatureValue/product-feature-value.service";
import {ProductService} from "../../../shop/services/product/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

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

  productFeatureValues = [];

  constructor(private brandService: BrandService,
              private categoryService: CategoryService,
              private productFeatureNamesService: ProductFeatureNamesService,
              private productFeatureValueService: ProductFeatureValueService,
              private productService: ProductService,
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
      id: -1,
      brand: this.brands[this.brandIndex],
      verticalId: this.verticals[this.verticalIndex]['id'],
      category: this.categories[this.categoryIndex],
      productName: this.productName,
      sellingRate: this.sellingRate,
      mrp: this.mrp,
      image1: (this.image1!=undefined && this.image1!=null) ? this.image1 : '',
      image2: (this.image2!=undefined && this.image2!=null) ? this.image2 : '',
      image3: (this.image3!=undefined && this.image3!=null) ? this.image3 : '',
      image4: (this.image4!=undefined && this.image4!=null) ? this.image4 : '',
      image5: (this.image5!=undefined && this.image5!=null) ? this.image5 : '',
      state: 1
    };


    //saving a product
    this.productService.add(product).subscribe(productrResponse => {
      console.log(productrResponse);


      this.productFeatureValues = [];
      let idCount = -1;
      for (let feature of this.productFeatureNames){

        //feature value entry to be inserted in the db
        const featureValueEntry = {
          id: idCount--,
          prodFeatureId: feature.id,
          productId: productrResponse['id'],
          prodFeatureValue: (feature.value!=undefined && feature.value!=null) ? feature.value : ' ',
        };

        if(this.productFeatureValues.length < 1){
          this.productFeatureValues = [featureValueEntry];
        }else{
          this.productFeatureValues.push(featureValueEntry);
        }
      }

      // saving product features
      this.productFeatureValueService.addAll(this.productFeatureValues).subscribe(response => {
        console.log(response);
      });

      this.router.navigate(['/admin']);

    });





  }

  onChangeVertical(){
    this.getLeafsByParentId();
    this.getFeatureNamesByVerticalId();
  }

}
