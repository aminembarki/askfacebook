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
    this.getCurrentId = function ($dom) {

        var m,
            re = /(fb:\/\/profile\/)+(\d)+/g;

        if ((m = re.exec($dom)) !== null){
           return  m[0].replace( /^\D+/g, '');
        }
        return  null;
    };
    this.getMyId = function ($dom) {
        var m,
            re = /(profile_pic_header_)+(\d)+/g;

        if ((m = re.exec($dom)) !== null) {
            return  m[0].replace( /^\D+/g, '');
        }
        return  null;
    };

}

