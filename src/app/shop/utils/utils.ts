import {forEach} from "@angular/router/src/utils/collection";
export class Utils {
    public static emartBaseUrl : string = "http://localhost:5555/";
    public static imgRoot : string = "https://firebasestorage.googleapis.com/v0/b/emart-7fabf.appspot.com/o/";

    public static adminBaseRoot: string = '/admin/';

    public static getBaseUrl() : string{
        let currentUrl : string = this.getCurrentUrl();
        let baseUrl : string = currentUrl.split("?")[0];
        //console.log(paramString);
        return baseUrl;
    }

    public static getCurrentUrl() : string{
        return window.location.href;
    }

    public static getUrlParams() : string[]{
        let currentUrl : string = this.getCurrentUrl();
        let paramString : string = currentUrl.split("?")[1];
        let params : string[] = paramString.split("&");

        return params;
    }

    public static getUrlParamsAsObj(){
        let params = this.getUrlParams();
        let paramsObj = {};

        for(let param of params){
            const splittedArr = param.split('=');
            let newObj = {};
            newObj[splittedArr[0]] = splittedArr[1];

            Object.assign(paramsObj, newObj);
        }
        return paramsObj;
    }
}
