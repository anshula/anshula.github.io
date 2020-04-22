function changePage() {
    var url = window.location.href;
    var url_start = url.split('#/')[0]
    var url_page  = url.split('#/')[1];
    var current_page = $(".is_stuck:last").parent().attr("data-comicpage");

    if(current_page !== url_page) {
        // console.log("new page");
        if(!freezeHashChanging) {
            // unfreezeScrolling();
            // console.log("page change due to user scrolling");
            pageChangeDueToUserScrolling = true;

             window.location.href = url_start + "#/"+current_page;

             // alert("unfreezing hash");
        }
    else {
        // console.log("there is a new url, but hash changing is frozen");
    }

    }
}

function locationHashChanged() {

    // if the hash change ddue to being in the middle of a scroll, don't scroll anymore
    if(freezeHashChanging) {
        // console.log("sorry -- hash changing is frozen");
        return;
    }

    console.log(location.hash);

    var newPage = parseInt(location.hash.substring(2));
    
    // make that part of the table of contents white
    $("#selected").removeAttr("id");
    $(".chapter a[href='"+location.hash+"'] .section").attr("id", "selected");

    // hide the other subsections
    $(".section").hide(); // hide all of the links
    var current_subsection = $("#selected").attr("class").split(' ')[1];  // then reshow all the links in the correct subsection
    $("."+current_subsection).show();
    $(".subchaptitle").hide(); // hide all of the subchaptertitles
    $("#selected").parent().parent().children().children(".subchaptitle").show(); // then reshow all the subchapter titles in the current chapter
    
    //change down arrows
    //make all current down arrows side arrows
    $(".chaptitle:contains(▼)").each( function(index) {$(this).text("► "+$(this).text().slice(2))});
    $(".subchaptitle:contains(▼)").each( function(index) {$(this).text("► "+$(this).text().slice(2))});
    // make correct chapter title down
    var old_text = $("#selected").parent().parent().children(".chaptitle").text();
    $("#selected").parent().parent().children(".chaptitle").text("▼ "+old_text.slice(2)); // change correct to down
    // make correct subchapter title down
    old_text = $("#selected").parent().parent().children().children(".subchaptitle"+ "."+current_subsection).text();
    $("#selected").parent().parent().children().children(".subchaptitle"+ "."+current_subsection).text("▼ "+ old_text.slice(2)); // change correct to down

    // scroll to that part in the table of contents sidebar
    $("#scrollable").animate({
        // scroll so current tab is at the top
        // then add in a buffer the height of the previous element
        // scrollTop: $("#selected").offset().top - $("#scrollable").offset().top + $("#scrollable").scrollTop() - $("#selected").parent().prev().find("div").outerHeight()
        scrollTop: $("#selected").offset().top - $("#scrollable").offset().top + $("#scrollable").scrollTop() - $("#scrollable").height()/2 + $("#selected").height()/2
    }, "fast");

    // change title of html head tag to the title of that comic
    var title = comictitles[parseInt(newPage-1)].title
    $("title").html("Real Analysis: " + title)

    // if the hash changed due to the user scrolling a little, don't scroll anymore
    if(pageChangeDueToUserScrolling) {
        pageChangeDueToUserScrolling = false;
        return;
    }

    // freeze hash changin until this function has finished
    freezeHashChanging = true;
    // alert("freezing hash");

    comicpage = $("div[data-comicpage='"+newPage.toString()+"']")
    // if that has already been loaded, scroll to that position
    if(comicpage.length == 1) {
        // console.log("page exists");
        scrollToComic(comicpage);
    }
    // otherwise, load the new page
    else {
        // console.log("page does not exist")

        // clear out old comics
        if($(".endless_scroll_inner_wrap").length == 0) {
            // if we haven't yet initiated scrolling
            $("#images").empty()

        }
        else {
            // we have already initiated scrolling
            $(".endless_scroll_inner_wrap").empty();

            // append the inner wrap in a new wrap with data number 0
            $(".endless_scroll_inner_wrap").append("<div class='endless_scroll_content' data-page='0'></div>")
        }
        

        // load in the new comics
        var numComicsToLoadAtOnce = 10;
        var min = newPage - numComicsToLoadAtOnce;
        var max = newPage + numComicsToLoadAtOnce;

        if (min < 1) {
            min = 1;
        }
        if (max > numcomics) {
            max = numcomics;
        }

        var pages = [];
        for (var i=min;i<=max;i++) {pages.push(i)};
        // console.log(pages);

        loadInitialComics(pages);

        // refresh endless scroll to only have pageStack 0
        if(myEndlessScroll) {
            myEndlessScroll.resetEndlessScroll();
        }
        

        // console.log(myEndlessScroll.pagesStack)

        // make sure i scroll to the new page
        comicpage = $("div[data-comicpage='"+newPage+"']");
        scrollToComic(comicpage);

    }

    // if on mobile and the haschange was triggered by clicking on menu bar
    // if(fromMobileNavbarClick) {
    //     $(".navbarcollapsebutton").trigger("click");
    //     fromMobileNavbarClick = false;
    //     // alert('triggered')
    // }

    // else {
    //     alert('not triggered')
    // }
    // else {
    //     alert("not mobile navbar")
    // }

}