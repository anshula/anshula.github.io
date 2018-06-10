
var numcomics = comictitles.length;

var freezeHashChanging = false;
var fromMobileNavbarClick = false;

var pageChangeDueToUserScrolling = false;

function loadInitialComics(pageNumbers) {

    var len = pageNumbers.length;

    var a = "<div class='comicpage' data-comicpage='"
    var b = "'><div class='comicheader'><div><p>"
    var c = "</p></div></div><img src='img/"
    var d = ".jpg' alt='"
    var e = "' class='comic'/></div>"

    for (index = 0; index < len; index++) {
        var page = pageNumbers[index];
        var title = comictitles[page-1].title;
        var alt = altText[page];

        var str = a + page + b + title + c + page + d + alt + e;

        var wrap;
        if ($(".endless_scroll_content").length == 1) {
            wrap = $(".endless_scroll_content")
        }
        else {
            wrap = $("#images")
        }
        wrap.append(str);
    }

    /*-------------------------------------------------------*/
    /* Make sticky headers of each comic section work */
    /*-------------------------------------------------------*/

    stickinparent(".comicheader");
}

$(document).ready(function() {


    window.onhashchange = locationHashChanged;

    /*-------------------------------------------------------*/
    /* Let navbar be populated by json */
    /*-------------------------------------------------------*/
    var chapter_index = -1;

    for (index = 0; index < numcomics; index++) {
        if(comictitles[index].newchapter == "true") {
            chapter_index++;
            $(".chapter").eq(chapter_index).find("a:first").attr("href", "#/"+(index+1));
        }

        if(comictitles[index].newsubchapter) {
            var a = "<a href='#/"
            var b = "'><div class='subchaptitle'>"
            var c = "</div></a>"
            $(".chapter").eq(chapter_index).append(a + (index+1) + b + comictitles[index].newsubchapter + c);
        }

        var a = "<a href='#/"
        var b = "'><div class='section'>"
        var c = "</div></a>"
        $(".chapter").eq(chapter_index).append(a + (index+1) + b + comictitles[index].title + c);

    }

    /*-------------------------------------------------------*/
    /* Go to the correct page */
    /*-------------------------------------------------------*/

    // figure out what the current url should be
    // if invalid url, make it a valid one
    var page = parseInt(window.location.href.split("#/")[1]);
    var pageold = parseInt(window.location.href.split("#")[1]);
    if((page > 0) && (page < (numcomics + 1) )) {
        // scrollto that page so we don't end up just at the previous scroll location on the old page
        window.location.href = "#/"+page;
        // force a hash change
        locationHashChanged();
    }
    else if((pageold > 0) && (pageold < (numcomics + 1) )) {
        // back compatibility when we just used a #

        // scrollto that page so we don't end up just at the previous scroll location on the old page
        window.location.href = "#/"+pageold;
        // force a hash change
        locationHashChanged();


    }
    else {
        // start at most recent comic
        window.location.href = "#/"+numcomics;
        // force a hash change
        locationHashChanged();
    }

    // trigger initial url
    // should eventually be replaced with lastURL (most recent comic)
    // window.location.replace("#1");


    /*-------------------------------------------------------*/
    /* if mobile device, make the navbar close when a link is clicked */
    /*-------------------------------------------------------*/
    if(isMobile) {
        // loop through each a tag in the navbar and link it to an onclick event that closes the navbar
        $("#navbarcontainer a").click(function() {
            // should only do it after the hashchange function
            fromMobileNavbarClick = true;
        })
    }

    /*-------------------------------------------------------*/
    /* Make navbar button work */
    /*-------------------------------------------------------*/
    $(".navbarcollapsebutton").click(function(){ 
        //get what is currently the url

        // freeze hash changing until this scrolling has finished
        // freezeScrolling();
        freezeHashChanging = true;
        
        var url_page = window.location.href.split("#/")[1];
        console.log(url_page);

        $(this).toggleClass("change"); // change the animation of the navbar collapse button
        $("#navbarcontainer").toggleClass("collapsed"); // hide the navbar
        $("#content").toggleClass("full"); // remove left margin from content (to make image wide)

        // set the current sticking comic headers to change size
        if($("#content").hasClass("full")) {
            var new_width = $("#container").outerWidth();
        }
        else {
            var new_width = $("#container").outerWidth() - $("#navbarcontainer").outerWidth();
        }
        $(".is_stuck").animate({
            width: new_width
        }, duration=150)

        // bind once!
        $("#content").one("transitionend", function(){
            // alert("finished animation");
            var comicpage = $("div[data-comicpage='" + url_page + "']");
            scrollToComic(comicpage);
        });

        // make sure that whatever the url was, you should scroll to it
        // but only do this once all the animation stuff is done
        
    });

    if(isMobile) {
        //hide navbar
        $(".navbarcollapsebutton").trigger("click");
    }

    /*-------------------------------------------------------*/
    /* Make endless scrolling work */
    /*-------------------------------------------------------*/

    setUpEndlessScroll();


});



