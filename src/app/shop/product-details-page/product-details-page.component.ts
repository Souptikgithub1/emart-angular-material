import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product/product.service";
import {Utils} from "../utils/utils";

@Component({
    selector: 'app-product-details-page',
    templateUrl: './product-details-page.component.html',
    styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {

    productId: string;

    productDetails: object;
    keyFeatures = [];
    imgRoot: string;

    productSpecifications = [];

    constructor(private activatedRoute: ActivatedRoute,
                private productService: ProductService) {
        this.imgRoot = Utils.imgRoot;
    }

    ngOnInit() {
        this.getProductDetails();
    }

    getProductDetails(){
        this.activatedRoute.params.subscribe(params => {
            this.productId = params['productId'];

            this.productService.getProdcutDetails(this.productId).subscribe(response => {
                this.productDetails = response;
                //console.log(this.productDetails);
                this.productDetails['sellingRateParsed'] = this.productDetails['sellingRate'] / 100;
                this.productDetails['mrpParsed'] = this.productDetails['mrp'] / 100;

                let productFeatureList = this.productDetails['featureList'];

                /*
                *
                * very very important parsing
                *
                * */
                //processing all features of the product
                let productSpecs = {};
                for(let productFeature of productFeatureList){
                    //console.log(productFeature);
                    const categoryName = productFeature['category'];
                    if(!productSpecs.hasOwnProperty(categoryName)){
                        productSpecs[categoryName] = {};
                        productSpecs[categoryName]['name'] = categoryName;
                        productSpecs[categoryName]['features'] = [productFeature];
                    }else{
                        productSpecs[categoryName]['features'].push(productFeature);
                    }
                }

                //console.log(productSpecs);

                //object form to array form
                for(let prodSpec in productSpecs){
                    //console.log(productSpecs[prodSpec]);
                    if(this.productSpecifications.length > 0){
                        this.productSpecifications.push(productSpecs[prodSpec]);
                    }else{
                        this.productSpecifications = [productSpecs[prodSpec]];
                    }


                    //extracting key features
                    let keyFeature = '';
                    for(let feature of productSpecs[prodSpec]['features']){
                        if(feature['keyFeatureState'] === '1'){
                            keyFeature += feature['name'] + ' ' + feature['value'] + ' | ';
                        }
                    }
                    keyFeature = keyFeature.slice(0, keyFeature.length-3);
                    if(keyFeature.trim().length != 0){
                        if(this.keyFeatures.length == 0){
                            this.keyFeatures = [keyFeature];
                        }else{
                            this.keyFeatures.push(keyFeature);
                        }
                    }
                    //console.log(keyFeature);
                }
                //console.log(this.productSpecifications);
                /*
                *
                * very very important parsing
                *
                * */
                //processing all features of the product


                this.addToRvp()
            });

        });

    }

    addToRvp(){
        if(Utils.getPreviousUrlLocalStorage() === Utils.getCurrentUrl()){
            //setting last url (product) visited
            //to eliminate repetation of product
            Utils.setPreviousUrlLocalStorage(Utils.getCurrentUrl());
            return;
        }

        //setting last url (product) visited
        //to eliminate repetation of product
        this.setLastVisitedUrl();
        let rvpObj = this.productDetails;
        let rvpArr = [];

        //setting rvp to localstorage
        if(Utils.getRvp().length == 0){
            rvpArr = [rvpObj];
        }else{
            rvpArr = Utils.getRvp();

            //limiting count of rvp
            if(rvpArr.length == 12){
                rvpArr.splice(0,1);
            }
            //eliminating repeated product by just reordering it
            for(let i = 0 ; i < rvpArr.length ; i++){
                if(rvpArr[i]['id'].toString() === this.productId){
                    rvpArr.splice(i, 1);
                }
            }
            rvpArr.push(rvpObj);
        }
        Utils.setRvp(JSON.stringify(rvpArr));
    }

    setLastVisitedUrl(){
        Utils.setPreviousUrlLocalStorage(Utils.getCurrentUrl());
    }
}
