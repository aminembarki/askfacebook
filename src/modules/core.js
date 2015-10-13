(function () {
    /**
     * @name mainController
     * @desc Main application Controller
     */
    var coreController = function ($scope, localStorageService) {

        var api = new chromeApi();

        this.getProfile = function () {
              if(this.isFacebook()){
                  var data = api.loadDom();
                  this.save('profile_id',api.getCurrentId(data));
                  this.save('my_id',api.getMyId(data));
              }
        };
        this.isFacebook = function () {
            return api.isFacebook();
        };
        this.save = function (key, val) {
            console.log(this.loadDom());
            return localStorageService.set(key, val);
        }

    }

    var errorpageDirective = function(){
        return {
            restrict: 'E',
            templateUrl: 'views/error-page.html'
        };
    }


    angular
        .module('coreController', ['LocalStorageModule'])
        .controller('coreController', coreController)
        .directive('errorPage', errorpageDirective);

})(chromeApi);