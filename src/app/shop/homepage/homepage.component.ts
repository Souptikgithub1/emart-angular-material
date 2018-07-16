import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product/product.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  isMobilesLessThan10kVisible: boolean = false
  mobilesLessThan10k: Array<object>;

  isTshirtsInLowPriceVisible: boolean = false;
    tshirtsInLowPrice: Array<object>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getMobilesLesthan10k();
    this.getTshirtsInLowPrice();
  }

  getMobilesLesthan10k(){
    const queryParams = {verticalId: 4, maxPrice: 1000000, page: 0, size: 12};
    this.productService.getProducts(queryParams).subscribe(products => {
      this.mobilesLessThan10k = products.productDetailsBeans;
      this.isMobilesLessThan10kVisible = true;
    });
  }

  getTshirtsInLowPrice(){
      const queryParams = {verticalId: 9, maxPrice: 70000, page: 0, size: 12};
      this.productService.getProducts(queryParams).subscribe(products => {
          this.tshirtsInLowPrice = products.productDetailsBeans;
          this.isTshirtsInLowPriceVisible = true;
      });
  }
}
