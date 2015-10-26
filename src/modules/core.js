(function () {
    /**
     * @name mainController
     * @desc Main application Controller
     */
    var coreController = function ($scope, localStorageService) {


        this.getProfile = function () {
              if(this.isFacebook()){
                  this.save('profile_id', this.getCurrentId(data));
                  this.save('my_id', this.getMyId(data));
              }
        };
        this.isFacebook = function () {
            return true;
        };
        this.save = function (key, val) {
            console.log(this.loadDom());
            return localStorageService.set(key, val);
        }

        this.getCurrentId = function ($dom) {

            var m,
                re = /(fb:\/\/profile\/)+(\d)+/g;

            if ((m = re.exec($dom)) !== null){
                return  m[0].replace( /^\D+/g, '');
            }
            return  null;
        };
        this.getMyId = function ($dom) {
            var m,
                re = /(profile_pic_header_)+(\d)+/g;

            if ((m = re.exec($dom)) !== null) {
                return  m[0].replace( /^\D+/g, '');
            }
            return  null;
        };

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

})();