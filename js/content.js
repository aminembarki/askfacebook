chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "getContext"){
            sendResponse({data: document.all[0].outerHTML, method: "getContext"}); //same as innerText
        }
    }
);

