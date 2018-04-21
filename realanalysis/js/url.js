function changePage() {
    var url = window.location.href;
    var url_start = url.split('#')[0]
    var url_page  = url.split('#')[1];
    var current_page = $(".is_stuck:last").parent().attr("data-comicpage");

    if(current_page !== url_page) {
        // console.log("new page");
        if(!freezeHashChanging) {
            // unfreezeScrolling();

             window.location.href = url_start + "#"+current_page;

             // alert("unfreezing hash");
        }
    else {
        // console.log("there is a new url, but hash changing is frozen");
    }

    }
}

function locationHashChanged() {

    if(freezeHashChanging) {
        // console.log("sorry -- hash changing is frozen");
        return;
    }

    // freeze hash changin until this function has finished
    freezeHashChanging = true;
    // alert("freezing hash");

    console.log(location.hash);

    // make that part of the table of contents white
    $("#selected").removeAttr("id");
    $(".chapter a[href='"+location.hash+"'] .section").attr("id", "selected");

    // if bibliography section
    if(location.hash == "#bibliography") {
        alert("biliography section");
        freezeHashChanging = false;
        return;
    }

    // if regular page
    var newPage = parseInt(location.hash.substring(1));
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
        var pages;
        if(newPage == 1) {
            pages = [newPage, newPage+1];
        }
        else if(newPage == numcomics) {
            pages = [newPage-1, newPage];
        }
        else {
            pages = [newPage-1, newPage, newPage+1];
        }

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
    if(fromMobileNavbarClick) {
        $(".navbarcollapsebutton").trigger("click");
        fromMobileNavbarClick = false;
        // alert('triggered')
    }
    // else {
    //     alert('not triggered')
    // }
    // else {
    //     alert("not mobile navbar")
    // }

}