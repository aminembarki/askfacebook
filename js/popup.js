

$(document).ready(function () {

    var htmlContext = "";
    chrome.browserAction.setBadgeBackgroundColor({color: "#ff0000"});
    chrome.browserAction.getBadgeText({}, function (Badge_txt) {
        var mark = $('.btn-clear');
        Badge_txt == '' ? mark.addClass('none') : mark.removeClass('none');

    });

    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.sendRequest(tab.id, {method: "getContext"}, function(response) {
            if(response.method=="getContext"){
                htmlContext = response.data;
                console.log(htmlContext);
            }
        });
    });


    var fbid = "";



    $('.search .button').click(function () {

        //var re = /(profile_id)?(=|:|")+(\d)+/g;
        //var str = htmlContext;
        //var index = str.search( 'profile_id' );
        //str = str.substring(index);
        //var m;
        //
        //if ((m = re.exec(str)) !== null) {
        //   fbid = m.replace( /^\D+/g, '');
        //   $('.search .currentid').text(fbid);
        //}

    });




});

