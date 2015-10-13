(function () {
    /**
     * @name mainController
     * @desc Main application Controller
     */
    var coreController = function ($scope, localStorageService) {

        this.getProfile = function () {
              this.loadDom().extractor();
        };

        this.loadDom = function () {
            var dom = null;

            return dom;
        };
        this.isFacebook = function () {
            var val = false;

            return val;
        };
        this.extractor = function($dom){

        };
        this.save = function (key, val) {
            console.log(this.loadDom());
            return localStorageService.set(key, val);
        }

    }


    angular
        .module('coreController', ['LocalStorageModule'])
        .controller('coreController', coreController);

})();