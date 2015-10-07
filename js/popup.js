htmlContext = "";


$(document).ready(function () {







    //chrome.tabs.getSelected(null, function(tab) {
    //    chrome.tabs.sendRequest(tab.id, {method: "getContext"}, function(response) {
    //        if(response.method=="getContext"){
    //            htmlContext = response.data;
    //            console.log("context loaded");
    //        }
    //    });
    //
    //});


    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log("context query");
        if(tabs[0].url.match('facebook.com') == undefined){
            $('#fb-only').show();
            $('.ask').hide();
            console.log("context only");
        }else{
            chrome.tabs.sendRequest(tabs[0].id, {method: "getContext"}, function(response) {
                        if(response.method=="getContext"){
                            htmlContext = response.data;
                            console.log("context loaded");
                        }
                    });
            console.log("context getContext");
        }
    });




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

