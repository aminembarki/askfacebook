var chromeApi = function () {


    this.loadDom = function () {
        var dom = null;
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {method: "getDom"}, function (response) {
                      if(response)
                        dom = response.data;
                });
            });
        return dom;
    };
    this.isFacebook = function () {
        var val = false;
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {method: "getDomain"}, function (response) {
                if(response)
                val = (response.data.match('facebook.com') != null);
            });
        });
        return val;
    };
    this.extractor = function ($dom) {

    };

}

