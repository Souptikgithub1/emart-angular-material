import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "../entities/product";
import {Utils} from "../utils/utils";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product')
  product : Product;
  imgRoot : string;

  constructor(private router: Router) {
    this.imgRoot = Utils.imgRoot;
  }

  ngOnInit() {
  }

  onClickProductCard(){
    console.log(this.product);
    this.router.navigate(['/product/' + this.product.id]);
  }



  openQuickViewModal(){

  }


}
