var myEndlessScroll;
// var inMiddleOfScroll = false;

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
        inflowPixels: 200,
        fireDelay: 200,
        fireOnce: true,
        ceaseFireOnEmpty: false,
        callback: function(i, p, direction) {

            // if(inMiddleOfScroll) {
            //     console.log("sorry -- already scorlling");
            //     return;
            // }

            // inMiddleOfScroll = true;

            var newimgid;
            var str;

             

            // cleanup the last endless scroll content
            $('#endless_scroll_content_current').removeAttr('id');

            var a = "<div class='comicheader'><div><p>";
            var b = "</p></div></div> <img src='img/";
            var c = ".jpg' alt='";
            var d = "' class='comic' />"; // d is already defined in callback

            // if the user is scrolling up
            if (direction == "prev") {
                var firstimgid = parseInt($(".comicpage:first").attr("data-comicpage"));

                if (firstimgid > 1) { // if there is actually something to scroll up to
                    $('body').css({ 'overflow': 'hidden' });

                    var pixels_from_bottom = $("#images").height() - $(window).scrollTop();
                    console.log("a", $("#images").height());

                    newimgid = (firstimgid - 1).toString();

                    var title = comictitles[parseInt(newimgid-1)].title;
                    var alt = altText[newimgid];

                    str = "<div id='endless_scroll_content_current' class='endless_scroll_content comicpage' data-page='" + p + "' data-comicpage='"+ newimgid +"'>" 
                                    + a + title + b + newimgid + c + alt + d
                            + "</div>";
                    $(".endless_scroll_inner_wrap").prepend(str);
                    stickinparent("div[data-comicpage='" + newimgid + "'] .comicheader");

                    // reposition scroll
                    // after image is loaded
                    $("#images").waitForImages(function() {
                        console.log("b", $("#images").height());
                        $(window).scrollTop($("#images").height() - pixels_from_bottom);
                        $('body').css({ 'overflow': 'scroll' });


                    });

                }

            }

            // if the user is scrolling down
            else {
                var lastimgid = parseInt($(".comicpage:last").attr("data-comicpage"));

                newimgid = (lastimgid + 1).toString();

                var title = comictitles[parseInt(newimgid-1)].title;
                var alt = altText[newimgid];

                str = "<div id='endless_scroll_content_current' class='endless_scroll_content comicpage' data-page='" + p + "' data-comicpage='"+ newimgid +"'>" 
                                    + a + title + b + newimgid + c + alt + d
                            + "</div>";
                $(".endless_scroll_inner_wrap").append(str);
                stickinparent("div[data-comicpage='" + newimgid + "'] .comicheader");
            }

            // // fade in the image
            // $("div[data-comicpage='" + newimgid + "']").css({opacity: 0.1});
            // $("div[data-comicpage='" + newimgid + "']").animate({ opacity: 1 }, 800);

            // inMiddleOfScroll = false;
        }
    });
}