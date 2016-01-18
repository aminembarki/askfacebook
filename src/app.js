

$(function(){

    chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.executeScript(tab.id, { file: "src/console/content.script.js", runAt: "document_end" }, function (response) { });
    });

    var context = {
        "name":"Ritesh Kumar",
        "occupation" : "Developer"
    }

    var template = Handlebars.templates.error(context);
    template = template + Handlebars.templates.navbar(context);



    $('#content-wrapper').html(template);

});