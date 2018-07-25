import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Utils} from "../../utils/utils";

@Component({
    selector: 'app-product-carousel',
    templateUrl: './product-carousel.component.html',
    styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit, OnChanges {

    @Input('products')
    products: Array<object>;
    @Input('title')
    title: string = 'Carousel';

    tag: string;

    productChunkedArr = [];

    constructor() { }

    ngOnInit(){
        this.displayProducts();
    }

    ngOnChanges(){
        this.displayProducts();
    }

    displayProducts(){
        this.tag = this.title.split(' ').join('-');
        this.productChunkedArr = Utils.arrayChunk(this.products, 6);
    }
}
