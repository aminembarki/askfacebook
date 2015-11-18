
(function() {

    var page = document.all[0].outerHTML;

    chrome.runtime.sendMessage({page: page}, function(response) {
        console.log(response);
    });

    var domain = document.domain;
    chrome.runtime.sendMessage({domain: domain}, function(response) {
        console.log(response);
    });

})();

