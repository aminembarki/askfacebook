
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
            "from the extension");
        if(request.method == "getDom"){
            sendResponse({data: document.all[0].outerHTML}); //same as innerText
        }
        if(request.method == "getDomain"){
            sendResponse({data: document.domain}); //same as innerText
        }
    });