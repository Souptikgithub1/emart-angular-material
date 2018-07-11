"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = (function () {
    function Utils() {
    }
    Utils.getBaseUrl = function () {
        var currentUrl = this.getCurrentUrl();
        var baseUrl = currentUrl.split("?")[0];
        //console.log(paramString);
        return baseUrl;
    };
    Utils.getCurrentUrl = function () {
        return window.location.href;
    };
    Utils.getUrlParams = function () {
        var currentUrl = this.getCurrentUrl();
        var paramString = currentUrl.split("?")[1];
        var params = paramString.split("&");
        return params;
    };
    Utils.getUrlParamsAsObj = function () {
        var params = this.getUrlParams();
        var paramsObj = {};
        for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
            var param = params_1[_i];
            var splittedArr = param.split('=');
            var newObj = {};
            newObj[splittedArr[0]] = splittedArr[1];
            Object.assign(paramsObj, newObj);
        }
        return paramsObj;
    };
    return Utils;
}());
Utils.emartBaseUrl = "http://localhost:5555/";
Utils.imgRoot = "https://firebasestorage.googleapis.com/v0/b/emart-7fabf.appspot.com/o/";
Utils.adminBaseRoot = '/admin/';
exports.Utils = Utils;
