chrome.browserAction.setBadgeText({text: "1"});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs.tab.id, {domain: "facebook.com"}, function(response) {
        data = response;
        console.log(data);
    });
});