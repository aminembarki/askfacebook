(function(){
    /**
     * @name mainController
     * @desc Main application Controller
     */
    var mainController = function($scope) {
        /**
         * @name isFacebook
         * @desc Does something awesome
         * @returns {Boolean}
         */
        this.isFacebook = function () {
            return false;
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