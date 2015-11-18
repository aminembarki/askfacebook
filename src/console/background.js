var dom,isfacebook; // used by the popup

//chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
//
//    if (request.action)
//        return;
//
//    page = request;
//
//    chrome.extension.sendRequest("done");
//
//    sendResponse({});
//});


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.page){
            dom = request.page;
        }
        if (request.domain){
            isfacebook = request.domain.match('facebook.com')!== null;
        }
            sendResponse({done: "goodbye"});

        chrome.runtime.sendMessage({done: true}, function(response) {
            console.log(response);
        });
    });

//chrome.browserAction.onClicked.addListener(function(tab) {
//    // No tabs or host permissions needed!
//    console.log('Turning ' + tab.url + ' red!');
//    chrome.tabs.executeScript({
//        code: 'alert("amine");'
//    });
//});