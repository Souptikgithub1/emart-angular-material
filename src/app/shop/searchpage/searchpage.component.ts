import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Utils} from "../utils/utils";
import {ProductService} from "../services/product/product.service";
import {Product} from "../entities/product";

declare var $: any;

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  public imgRoot: string;
  isModal: boolean = false;

   products: Product[] = [];
   startCount: string;
   endCount: string;
   noOfPages: number;
   pageParams = [];

   totalProductCount: string;
   categoryName: string;
   searchResultName: string;

  constructor(private activatedRoute : ActivatedRoute,
              private router : Router,
              private productService : ProductService) {
    this.imgRoot = Utils.imgRoot;
  }

  ngOnInit() {
    this.getProducts();
    this.getSearchedProducts();
  }

  getProducts(){
    let vertId: number;
    let catId : number;

    let page : number;
    let size : number;
    this.activatedRoute.queryParams.subscribe(params => {
      //fetching url params
      console.log(params.catId);
      catId = params.catId;
      page = (!!params.page || typeof params.page !== 'undefined') ? params.page-1 : 0;
      size = (!!params.size || typeof params.size !== 'undefined') ? params.size : 12;

      let queryParams = {};
      if(!!vertId){
        queryParams = {'verticalId' : vertId, 'page' : page, 'size' : size};
      }

      if(!!catId){
        queryParams = {'categoryId' : catId, 'page' : page, 'size' : size};
      }

      //fetching data from api
      this.productService.getProducts(queryParams).subscribe(response => {
        let products = response.products;

        // build pagination strip
        this.noOfPages = Number(response.noOfPages);
        this.pageParams = [];
        for(let i = 0; i < this.noOfPages ; i++){
          const urlString = this.generatePageUrl(i);
          if(this.pageParams.length > 0){
            this.pageParams.push(urlString);
          }else{
            this.pageParams = [urlString];
          }
        }
        // build pagination strip

        if(products.length > 0){
          this.startCount = response.startCount;
          this.endCount = response.endCount;
          this.totalProductCount = response.totalProductCount;
          this.categoryName = (!!params.catId && params.catId !== 'undefined') ? response.products[0].category.name : 'All Products';
          this.searchResultName = (!!params.catId && params.catId !== 'undefined') ? response.products[0].category.searchResultName : 'All Products';
        }

        //console.log(this.searchResultName);
        this.products = products;
        //console.log(this.products);

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



}


