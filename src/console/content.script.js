
(function() {

    var port = chrome.runtime.connect({name: "askfacebook"});
    port.postMessage({joke: "Knock knock"});
    port.onMessage.addListener(function(msg) {
        console.log(msg);
        var data = {domain: document.domain,content: document.all[0].outerHTML};
        if (msg.question == "Who's there?")
            port.postMessage(data);
        else if (msg.question == "Madame who?")
            port.postMessage({answer: "Madame... Bovary"});
    });
})();
