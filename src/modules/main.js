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

chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "askfacebook");
    port.onMessage.addListener(function(msg) {
        console.log(msg);
        if (msg.joke == "Knock knock")
            port.postMessage({question: "Who's there?"});
        else if (msg.answer == "Madame")
            port.postMessage({question: "Madame who?"});
        else if (msg.answer == "Madame... Bovary")
            port.postMessage({question: "I don't get it."});
    });
});