(function () {
    /**
     * @name mainController
     * @desc Main application Controller
     */
    var coreController = function ($scope, localStorageService) {

        $scope.page = chrome.extension.getBackgroundPage();
        $scope.profile = {};

        this.getProfile = function () {
            console.log('amine : '+ $scope.page.dom);
            this.save('profile_id', this.getCurrentId($scope.page.dom));
            this.save('my_id', this.getMyId($scope.page.dom));
            this.save('profile_name', this.getName($scope.page.dom));
            this.load();
        };
        this.isFacebook = function () {
            return $scope.page.isfacebook;
        };
        this.save = function (key, val) {
            return localStorageService.set(key, val);
        }

        this.load = function(){
            $scope.profile.me =localStorageService.get('my_id');
            $scope.profile.id =localStorageService.get('profile_id');
            $scope.profile.name =localStorageService.get('profile_name');
        }

        this.getCurrentId = function ($dom) {

            var m,
                re = /(fb:\/\/profile\/)+(\d)+/g;

            if ((m = re.exec($dom)) !== null){
                return  m[0].replace( /^\D+/g, '');
            }
            return  null;
        };
        this.getName = function ($dom) {

            return $($dom).find("#fb-timeline-cover-name").html() ;
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