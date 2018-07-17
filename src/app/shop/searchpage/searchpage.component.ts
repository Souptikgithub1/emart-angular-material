import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Utils} from "../utils/utils";
import {ProductService} from "../services/product/product.service";
import {Product} from "../entities/product";
import {CategoryService} from "../services/category/category.service";

declare var $: any;

@Component({
    selector: 'app-searchpage',
    templateUrl: './searchpage.component.html',
    styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

    isLoaderVisible: boolean = true;

    public imgRoot: string;
    isModal: boolean = false;

    products: Product[] = [];

    startCount: string;
    endCount: string;
    noOfPages: number;
    pageParams = [];

    totalProductCount: string;
    page: number = 1;
    categoryName: string;
    verticalName: string;
    searchResultName: string;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private productService: ProductService,
                private categoryService: CategoryService) {
        this.imgRoot = Utils.imgRoot;
    }

    ngOnInit() {
        this.getProducts();
        //this.getSearchedProducts();
    }

    getProducts(){

        let catId;
        let vertId;

        let page : number;
        let size : number;
        this.activatedRoute.queryParams.subscribe(params => {
            //fetching url params
            console.log(params.catId);
            console.log(params.vertId);
            catId = params.catId;
            vertId = params.vertId;

            page = (!!params.page || typeof params.page !== 'undefined') ? params.page-1 : 0;
            this.page = page;
            size = (!!params.size || typeof params.size !== 'undefined') ? params.size : 12;

            let queryParams = {
                'categoryId' : !!catId ? catId : '',
                'verticalId' : !!vertId ? vertId : '',
                'page' : page,
                'size' : size
            };

            //fetching data from api
            this.products = [];
            this.productService.getProducts(queryParams).subscribe(response => {
                //console.log(response);
                this.products = response.productDetailsBeans;

                // build pagination strip
                this.noOfPages = Number(response.noOfPages);
                this.pageParams = [];
                for(let i = 0; i < this.noOfPages ; i++){
                    const urlString = this.generatePageUrl(i);
                    console.log(urlString);
                    if(this.pageParams.length > 0){
                        this.pageParams.push(urlString);
                    }else{
                        this.pageParams = [urlString];
                    }
                }
                // build pagination strip

                if(this.products.length > 0){
                    this.startCount = response.startCount;
                    this.endCount = response.endCount;
                    this.totalProductCount = response.totalProductCount;



                    this.categoryName = this.products[0].category.name;
                    this.searchResultName = this.products[0].category.searchResultName;

                    if(!!vertId){
                        this.categoryService.getCategory(this.products[0].verticalId.toString()).subscribe(vertical => {
                            this.searchResultName = !!vertical.searchResultName ? vertical.searchResultName : vertical.name;
                        });
                    }

                }
            });
        });
    }

    generatePageUrl(pageNumber : number) {
        let urlParamsObj = Utils.getUrlParamsAsObj();
        //console.log(urlParamsObj);

        let isPageAvailable = false;
        for(let param in urlParamsObj){
            if(param === 'page'){
                isPageAvailable = true;
                urlParamsObj[param] = pageNumber + 1;
                break;
            }
        }
        if(!isPageAvailable){
            Object.assign(urlParamsObj, {page: pageNumber+1});
        }

        return urlParamsObj;
    }

    navigateToPage(pageParam){
        //console.log(pageParam);
        this.router.navigate(['/search'], {queryParams : pageParam});
    }

    openQuickViewModal(event){
        this.isModal == true;
        $('#quickViewModal').modal('show');
        console.log(event);
    }

    getSearchedProducts(){
        let catId : number;
        let page : number;
        let size : number;

        this.activatedRoute.queryParams.subscribe(params => {
            //fetching url params
            catId = params.catId;
            page = (!!params.page || typeof params.page !== 'undefined') ? params.page-1 : 0;
            size = (!!params.size || typeof params.size !== 'undefined') ? params.size : 12;

            this.productService.getSearchedProducts({'categoryId' : catId, 'page' : page, 'size' : size}).subscribe(response => {
                    console.log(response);
                }, error => {},
                () => {});
        });

    }


    isproductCardDetailed(){
        let vertIds = [4, 5];
        return !!vertIds.includes(this.products[0].verticalId);
    }

}


