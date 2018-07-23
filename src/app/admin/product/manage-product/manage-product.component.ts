import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../shop/services/product/product.service";
import {Router} from "@angular/router";
import {Utils} from "../../../shop/utils/utils";
import {BrandService} from "../../../shop/services/brand/brand.service";
import {CategoryService} from "../../../shop/services/category/category.service";

@Component({
    selector: 'app-manage-product',
    templateUrl: './manage-product.component.html',
    styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

    products = [];

    brands = [];
    brandId: number = 0;

    verticals = [];
    verticalId: number = 0;
    constructor(private productService: ProductService,
                private brandService: BrandService,
                private categoryService: CategoryService,
                private router: Router) { }

    adminBaseRoot: string = Utils.adminBaseRoot;


    ngOnInit() {
        this.getVerticals();
        this.getAllBrands();

        //this.getAllProducts();
    }

    getVerticals(){
        this.categoryService.getVerticals().subscribe(verticals => {
            this.verticals = verticals;
            console.log(verticals);
        });
    }

    getAllBrands(){
        this.brandService.getAll().subscribe(brands => {
            this.brands = brands;
        });
    }


    getAllProducts(){
        const params = {
            verticalId: this.verticalId,
            brandId: this.brandId
        }
        this.productService.getByBrandAndVertical(params).subscribe(response => {
            console.log(response);
            this.products = response;
        });
    }

    editProduct(productId){
        this.router.navigate([this.adminBaseRoot + 'edit-product/' + productId]);
    }

    deleteProduct(productId){
        this.productService.deleteProduct(productId).subscribe(response => {
            if(!!response){
                this.getAllProducts();
            }
        });
    }

    toggleProductState(product){
        this.productService.updateProductState(product['id']).subscribe(response => {
            if(!!response){
                if(product['state'] === '1'){
                    product['state'] = '0';
                }else{
                    product['state'] = '1';
                }
            }
        });
        console.log(product['id']);
    }

}
