/**
 * @name App
 * @desc Main application Controller
 */

(function(){
    var app = angular.module('askFacebook',['mainController','coreController']);
    app.config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix(app.name);
    });
})();

