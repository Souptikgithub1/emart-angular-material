import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../../entities/product";
import {Utils} from "../../utils/utils";

@Component({
  selector: 'app-product-card-detailed',
  templateUrl: './product-card-detailed.component.html',
  styleUrls: ['./product-card-detailed.component.scss']
})
export class ProductCardDetailedComponent implements OnInit {

    @Input('product')
    product : Product;

    imgRoot : string;

    productIdEncoded: string;

    baseDomain: string = Utils.getBaseDomain();
    constructor(private router: Router) {
        this.imgRoot = Utils.imgRoot;
    }

    ngOnInit() {
        this.productIdEncoded = Utils.getProductIdEncoded(this.product);
    }

    onClickProductCard(){
        console.log(this.product);
        this.router.navigate(['/product/' + this.product.id]);
    }

}
