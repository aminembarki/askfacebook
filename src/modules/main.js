(function(){
    /**
     * @name mainController
     * @desc Main application Controller
     */
    var mainController = function($scope) {

        $scope.page = chrome.extension.getBackgroundPage();

        /**
         * @name isFacebook
         * @desc Does something awesome
         * @returns {Boolean}
         */
        this.isFacebook = function () {
            return $scope.page.isfacebook;
        };

    }
    /**
     * @name navBarDirective
     * @desc navBar application Directive
     */
    function navBarDirective () {

        return {
            restrict: 'E',
            templateUrl: 'views/nav-bar.html'

        };

    }

    angular
    .module('mainController', [])
    .controller('mainController', mainController)
    .directive('navBar', navBarDirective);

})();

