/**
 * @name App
 * @desc Main application Controller
 */

var hasRun = false;
var page = false;
(function(){

    chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.executeScript(tab.id, { file: "src/console/content.script.js", runAt: "document_end" }, function (response) { });
    });



    var app = angular.module('askFacebook',['mainController','coreController']);
    app.config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix(app.name);
    });

    $(".questions a").click(function(){
        chrome.tabs.getSelected(null,function(tab) {
            chrome.tabs.update(tab.id, {url: $(this).attr('href')});
        });
    });

})();

