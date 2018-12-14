import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Utils} from "../utils/utils";
import {ProductService} from "../services/product/product.service";
import {Product} from "../entities/product";
import {CategoryService} from "../services/category/category.service";
import {ProductFeatureNamesService} from "../services/ProductFeatureNames/product-feature-names.service";
import {Filters} from "../utils/filters";
import {Options} from "ng5-slider";

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

    searchResDetails: string;
    searchResultString: string;

    filters: Array<object>;
    activeFilters: Array<object> = [];

    minPrice: number = 0;
    maxPrice: number = 100000;
    options: Options = {
        floor: 0,
        ceil: 100000,
        step: 1,
    };

    queryString: string;
    sort: string;
    selectedSortIndex: number;

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
            window.scrollTo(0, 0);
            this.isLoaderVisible = true;

            //fetching url params
            //console.log(params.catId);
            //console.log(params.vertId);
            catId = params.catId;
            vertId = params.vertId;



            page = (!!params.page || typeof params.page !== 'undefined') ? params.page-1 : 0;
            this.page = page;
            size = (!!params.size || typeof params.size !== 'undefined') ? params.size : 15;



            filtersForUrl = (params.filters !== undefined && params.filters !== 'W10%3D') ? JSON.parse(atob(params.filters)) : [];
            this.activeFilters = filtersForUrl;

            this.selectedSortIndex = !!params.sort ? Utils.sortArr.findIndex(x => x === params.sort) + 1 : 1;

            let queryParams = {};
             queryParams = {
                'categoryId' : !!catId ? catId : 0,
                'verticalId' : !!vertId ? vertId : 0,
                'page' : page,
                'size' : size,
                'filters' : filtersForUrl,
                'minPrice' : (!!params.minPrice ? params.minPrice : 0)*100,
                'maxPrice' : (!!params.maxPrice ? params.maxPrice : 100000)*100,
                'sort' : (!!params.sort ? params.sort : "price_asc")
            };

             if(!!params.q){
                 if(decodeURI(params.q) !== this.queryString){
                     queryParams = {'q': params.q};
                 }else{
                     Object.assign(queryParams, {'q': params.q});
                 }
             }
            this.queryString = decodeURI(params.q);

            //fetching data from api
            this.products = [];
            this.productService.getProducts(queryParams).subscribe(response => {
                //console.log(response);
                this.products = response.productDetailsBeans;

                this.minPrice = !!params.minPrice ? params.minPrice : response.minPrice/100;
                this.maxPrice = !!params.maxPrice ? params.maxPrice : response.maxPrice/100;


                let options: Options = {
                    floor: response.minPrice/100,
                    ceil: response.maxPrice/100,
                    step: 1,
                };
                this.options = options;

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



                    if(!!catId){
                        this.categoryName = this.products[0].category.name;
                        this.searchResultName = this.products[0].category.searchResultName;
                    }


                    if(!!vertId){
                        this.categoryService.getCategory(this.products[0].verticalId.toString()).subscribe(vertical => {
                            this.searchResultName = !!vertical.searchResultName ? vertical.searchResultName : vertical.name;
                        });
                    }

                    if(!!params.q){
                        this.searchResDetails = "Showing Search Results For ";
                        this.searchResultString = "'" + this.queryString + "'";
                    }else{
                        this.searchResDetails = '';
                        this.searchResultString = '';
                        this.queryString = '';
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
        console.log(pageParam);
        if(pageParam.hasOwnProperty('filters')){
            if(pageParam['filters'] === 'W10%3D'){
                delete pageParam['filters'];
            }
        }
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


            if(this.activeFilters.length > 0){
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
            }else {
                for (let filter of this.filters){
                    for (let filterValue of filter['values']){
                        filterValue['checked'] = false;
                    }
                }
            }


            //console.log(this.filters);

        });
    }

    onFilterChange(event, featureNameId, filterValue, filterIndex, filterValueIndex){
        //console.log(event.target.checked, featureNameId, filterValue);

        const filterObj = {featureId: featureNameId, filterValues: [filterValue]};
        if(!!event.target.checked){
            this.filters[filterIndex]['values'][filterValueIndex]['checked'] = true;
            if(this.activeFilters.length == 0){
                this.activeFilters = [filterObj];
            }else{
                let isKeyFound = false;
                for (let k = 0 ; k < this.activeFilters.length ; k++){
                    if(this.activeFilters[k]['featureId'] == featureNameId){
                        this.activeFilters[k]['filterValues'].push(filterValue);
                        isKeyFound = true;
                        break;
                    }
                }
                if(!isKeyFound){
                    this.activeFilters.push(filterObj);
                }

            }
        }else {
            this.filters[filterIndex]['values'][filterValueIndex]['checked'] = false;
            if (this.activeFilters.length > 0) { //if elements exists in activeFilters
                for(let k = 0 ; k < this.activeFilters.length ; k++){
                    if(this.activeFilters[k]['featureId'] == featureNameId){ //if filter with that featureId-key exists in the array

                        if(this.activeFilters[k]['filterValues'].length > 1){ //if there is more than one filterValues with that featureId-key
                            for(let l = 0 ; l < this.activeFilters[k]['filterValues'].length ; l++){
                                if(this.activeFilters[k]['filterValues'][l] === filterValue){ //if filterValue matches
                                    this.activeFilters[k]['filterValues'].splice(l, 1);
                                }
                            }
                        }else if(this.activeFilters[k]['filterValues'].length == 1){
                            this.activeFilters.splice(k, 1);
                        }
                    }
                }
            }
        }


        this.changeFilterAndNavigate();

    }

    changeFilterAndNavigate(){
        let urlParamsObj = Utils.getUrlParamsAsObj();
        if(!!urlParamsObj['q']){
            urlParamsObj['q'] = decodeURI(urlParamsObj['q']);
        }

        urlParamsObj['page'] = 1;
        urlParamsObj['minPrice'] = this.minPrice;
        urlParamsObj['maxPrice'] = this.maxPrice;

        urlParamsObj['sort'] = this.sort;

        if (urlParamsObj.hasOwnProperty('filters')){
            urlParamsObj['filters'] = btoa(JSON.stringify(this.activeFilters));
        } else {
            Object.assign(urlParamsObj, {filters: btoa(JSON.stringify(this.activeFilters))})
        }

        this.router.navigate(['/search'], {queryParams: urlParamsObj});
    }

    doSort($event){
        if($event == 1){
            this.sort = "price_asc";
        }
        if($event == 2){
            this.sort = "price_desc";
        }
        if($event == 3){
            this.sort = "latest_desc";
        }
        this.selectedSortIndex = $event;
        this.changeFilterAndNavigate();
    }

}


