
export class Utils {
    public static emartBaseUrl : string = !!Utils.isLocalHost() ? "http://localhost:5556/" : "https://emartapi.herokuapp.com/";
    public static imgRoot : string = "https://firebasestorage.googleapis.com/v0/b/emart-7fabf.appspot.com/o/";

    public static adminBaseRoot: string = '/admin/';


    public static SELF_PROVIDER = 'SELF';
    public static GOOGLE_PROVIDER = 'GOOGLE';
    public static FB_PROVIDER = 'FACEBOOK';

    public static rvpKey = 'rvp';
    public static rvpLocalStorage = localStorage.getItem(Utils.rvpKey);


    public static previousUrlKey = 'previousUrl';

    public static USER_AUTH_TOKEN_KEY = 'eAtkn';
    public static USER_DETAILS_KEY = 'eud';

    public static setUserAuthToken(authToken: string){
        localStorage.setItem(this.USER_AUTH_TOKEN_KEY, authToken);
    }

    public static setUserToLocalStorage(user: object){
        localStorage.setItem(this.USER_DETAILS_KEY, btoa(JSON.stringify(user)));
    }

    public static getUserFromLocalStorage(){
        const data = localStorage.getItem(this.USER_DETAILS_KEY);

        if(!!data && data !== undefined && data!=''){
            return JSON.parse(atob(data));
        }else{
            return null;
        }
    }
    public static removeUserFromLocalStorage(){
        localStorage.removeItem(this.USER_DETAILS_KEY);
    }

    public static setPreviousUrlLocalStorage(previousUrl: string){
        localStorage.setItem(this.previousUrlKey, previousUrl);
    }
    public static getPreviousUrlLocalStorage(){
        return localStorage.getItem(Utils.previousUrlKey) === undefined
                || localStorage.getItem(Utils.previousUrlKey) == null ? '' : localStorage.getItem(Utils.previousUrlKey);;
    }




    public static setRvp(rvpString: string){
        localStorage.setItem(this.rvpKey, rvpString);
    }

    public static getRvp(){
        return localStorage.getItem(this.rvpKey) == null
                || localStorage.getItem(this.rvpKey) === undefined ? [] : JSON.parse(localStorage.getItem(this.rvpKey));
    }

    public static isLocalHost(){
        return this.getBaseDomainName() == 'localhost' ? true : false;
    }

    public static getBaseDomainName(){
        return this.getCurrentUrl().split('/')[2].split(':')[0];
    }

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

    public static arrayChunk(arr, chunkSize){
        let chunkedArr = [];

        if(arr.length < chunkSize){
            return chunkedArr = [arr];
        }

        let chunk = [];
        for(let i = 0 ; i < arr.length ; i++){
            if(chunk.length == 0){
                chunk = [arr[i]];
            }else{
                chunk.push(arr[i]);
            }

            if(( i + 1 ) % chunkSize == 0){
                if(chunkedArr.length == 0){
                    chunkedArr = [chunk];
                }else{
                    chunkedArr.push(chunk);
                }
                chunk = [];
            }
        }

        if(chunk.length < chunkSize){
            chunkedArr.push(chunk);
        }

        return chunkedArr;
    }
}
