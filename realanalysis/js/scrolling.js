var myEndlessScroll;

function scrollOnceLoaded(img) {
        $("html, body").animate({
            // go to top of comic image, but leave 60 pixels of space (height of header) plus 10 pixels of margin
            scrollTop: img.offset().top - (60 + 10) 
        }, "fast");

        $("html, body").promise().done(function() {
            freezeHashChanging = false;
            // alert("unfreezing hash changing");
        
        });
}

function scrollToComic(comicpage) {
    var img = comicpage.find("img");

    $("#images").waitForImages(function() {
        // alert('All images are loaded.');
        scrollOnceLoaded(img);
    });

}


function setUpEndlessScroll() {
    $(window).endlessScroll({
        pagesToKeep: 4,
        lastPage: numcomics.toString(),
        inflowPixels: 50,
        fireDelay: 150,
        fireOnce: true,
        ceaseFireOnEmpty: false,
        callback: function(i, p, d) {

            // if(freezeHashChanging) {
            //     return;
            // }

            var newimgid;
            var str;

            // cleanup the last endless scroll content
            $('#endless_scroll_content_current').removeAttr('id');

            var imgtagstart = "<div class='comicheader'><div><p>";
            var imgmiddle = "</p></div></div> <img src='img/";
            var imgtagend = ".jpg' class='comic' />";

            // if the user is scrolling up
            if (d == "prev") {
                var firstimgid = parseInt($(".comicpage:first").attr("data-comicpage"));

                if (firstimgid > 1) { // if there is actually something to scroll up to

                    newimgid = (firstimgid - 1).toString();

                    var title = comictitles[parseInt(newimgid-1)].title;

                    str = "<div id='endless_scroll_content_current' class='endless_scroll_content comicpage' data-page='" + p + "' data-comicpage='"+ newimgid +"'>" 
                                    + imgtagstart + title + imgmiddle + newimgid + imgtagend 
                            + "</div>";
                    $(".endless_scroll_inner_wrap").prepend(str);
                    stickinparent("div[data-comicpage='" + newimgid + "'] .comicheader");
                }

            }

            // if the user is scrolling down
            else {
                var lastimgid = parseInt($(".comicpage:last").attr("data-comicpage"));

                newimgid = (lastimgid + 1).toString();

                var title = comictitles[parseInt(newimgid-1)].title;

                str = "<div id='endless_scroll_content_current' class='endless_scroll_content comicpage' data-page='" + p + "' data-comicpage='"+ newimgid +"'>" 
                                    + imgtagstart + title + imgmiddle + newimgid + imgtagend 
                            + "</div>";
                $(".endless_scroll_inner_wrap").append(str);
                stickinparent("div[data-comicpage='" + newimgid + "'] .comicheader");
            }


        }
    });
}