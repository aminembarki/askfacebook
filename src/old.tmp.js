//var $htmlContext = "";
//var $domain ;
//
//$(document).ready(function () {
//
//
//
//
//
//
//
//    chrome.tabs.getSelected(null, function(tab) {
//        chrome.tabs.sendRequest(tab.id, {method: "getDomain"}, function(response) {
//            if(response.method=="getDomain"){
//                if(response.data.match('facebook.com') == undefined){
//                    $('#fb-only').show();
//                    $('.ask').hide();
//                    $domain = response.data;
//                }else{
//                    chrome.tabs.sendRequest(tabs.id, {method: "getDom"}, function(response) {
//                        if(response.method=="getDom"){
//                            $htmlContext = response.data;
//                        }
//                    });
//                }
//            }
//        });
//
//    });
//
//
//    $('.search .button').click(function () {
//
//        //var re = /(profile_id)?(=|:|")+(\d)+/g;
//        //var str = htmlContext;
//        //var index = str.search( 'profile_id' );
//        //str = str.substring(index);
//        //var m;
//        //
//        //if ((m = re.exec(str)) !== null) {
//        //   fbid = m.replace( /^\D+/g, '');
//        //   $('.search .currentid').text(fbid);
//        //}
//
//    });
//
//    $('#gotofacebook').click(function () {
//        var newURL = "https://www.facebook.com";
//        chrome.tabs.create({ url: newURL });
//    });
//
//
//
//
//
//
//});


