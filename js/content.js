chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "getDom"){
            sendResponse({data: document.all[0].outerHTML, method: "getDom"}); //same as innerText
        }
        if(request.method == "getDomain"){
            sendResponse({data: document.domain, method: "getDomain"}); //same as innerText
        }
    }
);

