$(function() {
  $("body").swipe( {
    //Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        if(direction == "left") {
            console.log("left")

            // if navbar is showing, hide it
            if(!$("#navbarcontainer").hasClass("collapsed")) {
                $(".navbarcollapsebutton").trigger("click");
            }

            

        }
        else if(direction == "right") {
            console.log("right")

            // if navbar is hidden, show it
            if($("#navbarcontainer").hasClass("collapsed")) {
                $(".navbarcollapsebutton").trigger("click");
            }
        }
    }
  });
});