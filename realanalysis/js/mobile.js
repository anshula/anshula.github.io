var isMobile = false;


$(function(){

  if (/Mobi/.test(navigator.userAgent)) {
    // mobile!
    isMobile = true;
}

  // Bind the swipeHandler callback function to the swipe event on div.box
  $( "body" ).on( "swipeleft", swipedLeft );
 
  // Callback function references the event target and adds the 'swipe' class to it
  function swipedLeft( event ){
    console.log("swipe left")

    // if navbar is showing, hide it
    if(!$("#navbarcontainer").hasClass("collapsed")) {
        $(".navbarcollapsebutton").trigger("click");
    }

  }
});
