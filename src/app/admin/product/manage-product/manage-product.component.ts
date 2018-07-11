import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../shop/services/product/product.service";
import {Router} from "@angular/router";
import {Utils} from "../../../shop/utils/utils";

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  products = [];
  constructor(private productService: ProductService,
              private router: Router) { }

  adminBaseRoot: string = Utils.adminBaseRoot;


  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAll().subscribe(response => {
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
