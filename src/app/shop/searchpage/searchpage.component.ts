import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Utils} from "../utils/utils";
import {ProductService} from "../services/product/product.service";
import {Product} from "../entities/product";
import {CategoryService} from "../services/category/category.service";
import {ProductFeatureNamesService} from "../services/ProductFeatureNames/product-feature-names.service";
import {Filters} from "../utils/filters";

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

    filters: Array<object>;
    activeFilters: Array<object> = [];

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private productService: ProductService,
                private categoryService: CategoryService,
                private productFeatureNamesService: ProductFeatureNamesService) {
        this.imgRoot = Utils.imgRoot;
    }

    ngOnInit() {
        this.getProducts();
        //this.getSearchedProducts();
    }

    getProducts(){

        let catId;
        let vertId;
        let filtersForUrl;

        let page : number;
        let size : number;
        this.activatedRoute.queryParams.subscribe(params => {

            //fetching url params
            //console.log(params.catId);
            //console.log(params.vertId);
            catId = params.catId;
            vertId = params.vertId;

            page = (!!params.page || typeof params.page !== 'undefined') ? params.page-1 : 0;
            this.page = page;
            size = (!!params.size || typeof params.size !== 'undefined') ? params.size : 12;



            filtersForUrl = (params.filters !== undefined) ? JSON.parse(atob(params.filters)) : [];
            this.activeFilters = filtersForUrl;

            let queryParams = {
                'categoryId' : !!catId ? catId : 0,
                'verticalId' : !!vertId ? vertId : 0,
                'page' : page,
                'size' : size,
                'filters' : filtersForUrl
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
                    //console.log(urlString);
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

                    //fetch filterable features
                    this.getFilterableFeatures();
                }
                this.isLoaderVisible = false;
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
        //console.log(event);
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


    getFilterableFeatures(){
        this.productFeatureNamesService.getByVerticalAndIsFilterable(this.products[0].verticalId, '1').subscribe(filterables => {
            this.filters = [];
            //console.log(filterables);
            for(let filter of Filters.FILTERS){
                for(let filterable of filterables){
                    if(filter['name'] == filterable['prodFeatureName']){
                        filterable['values'] = filter['values'];
                        if(this.filters.length == 0){
                            this.filters = [filterable];
                        }else{
                            this.filters.push(filterable);
                        }
                    }
                }
            }

            for(let filter of this.filters){
                for(let activeFilter of this.activeFilters){
                    if(filter['id'] == activeFilter['featureId']){
                        for(let filterValue of filter['values']){
                            for(let activeFilterValue of activeFilter['filterValues']){
                                if(filterValue['value'] === activeFilterValue){
                                    filterValue['checked'] = true;
                                }
                            }
                        }
                    }
                }
            }

            //console.log(this.filters);

        });
    }

    onFilterChange(event, featureNameId, filterValue, i, j){
        //console.log(event.target.checked, featureNameId, filterValue);

        const filterObj = {featureId: featureNameId, filterValues: [filterValue]};
        if(!!event.target.checked){
            this.filters[i]['values'][j]['checked'] = true;
            if(this.activeFilters.length == 0){
                this.activeFilters = [filterObj];
            }else{
                let isKeyFound = false;
                for (let i = 0 ; i < this.activeFilters.length ; i++){
                    if(this.activeFilters[i]['featureId'] == featureNameId){
                        this.activeFilters[i]['filterValues'].push(filterValue);
                        isKeyFound = true;
                        break;
                    }
                }
                if(!isKeyFound){
                    this.activeFilters.push(filterObj);
                }

            }
        }else {
            this.filters[i]['values'][j]['checked'] = false;
            if (this.activeFilters.length > 0) { //if elements exists in activeFilters
                for(let i = 0 ; i < this.activeFilters.length ; i++){
                    if(this.activeFilters[i]['featureId'] == featureNameId){ //if filter with that featureId-key exists in the array

                        if(this.activeFilters[i]['filterValues'].length > 1){ //if there is more than one filterValues with that featureId-key
                            for(let j = 0 ; j < this.activeFilters[i]['filterValues'].length ; j++){
                                if(this.activeFilters[i]['filterValues'][j] === filterValue){ //if filterValue matches
                                    this.activeFilters[i]['filterValues'].splice(j, 1);
                                }
                            }
                        }else if(this.activeFilters[i]['filterValues'].length == 1){
                            this.activeFilters.splice(i, 1);
                        }
                    }
                }
            }
        }


        let urlParamsObj = Utils.getUrlParamsAsObj();
            if (urlParamsObj.hasOwnProperty('filters')){
                urlParamsObj['filters'] = btoa(JSON.stringify(this.activeFilters));
            } else {
                Object.assign(urlParamsObj, {filters: btoa(JSON.stringify(this.activeFilters))})
            }

            this.router.navigate(['/search'], {queryParams: urlParamsObj});

    }

}


