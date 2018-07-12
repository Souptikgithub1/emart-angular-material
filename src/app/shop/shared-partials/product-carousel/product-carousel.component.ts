import {Component, Input, OnInit} from '@angular/core';
import {Utils} from "../../utils/utils";

@Component({
    selector: 'app-product-carousel',
    templateUrl: './product-carousel.component.html',
    styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {

    @Input('products')
    products: object;
    @Input('title')
    title: string = 'Carousel';

    productChunkedArr = [];

    constructor() { }

    ngOnInit(){
        this.productChunkedArr = Utils.arrayChunk(this.products, 6);
    }
}
