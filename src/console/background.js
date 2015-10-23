
//chrome.runtime.onMessage.addListener(
//    function(request, sender, sendResponse) {
//        if(request.method == "getDom"){
//            sendResponse({data: document.all[0].outerHTML}); //same as innerText
//        }
//        if(request.method == "getDomain"){
//            sendResponse({data: document.domain}); //same as innerText
//        }
//    });

chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
});

function updateSelected(tabId) {
    console.log('Turning ' + tabId + ' red!');
}
function updateAddress(tabId) {
    console.log('Turning ' + tabId + ' red!');
}

chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
    if (change.status == "complete") {
        updateAddress(tabId);
    }
});

chrome.tabs.onSelectionChanged.addListener(function(tabId, info) {
    //selectedId = tabId;
    updateSelected(tabId);
});

// Ensure the current selected tab is set up.
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    updateAddress(tabs[0].id);
});
