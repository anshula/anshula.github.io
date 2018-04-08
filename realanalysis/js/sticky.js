function stickinparent(selector) {
    $(selector).stick_in_parent({recalc_every: 50, bottoming: false})
        .on("sticky_kit:stick", function(e) {
            $(e.target).attr("style", ""); // clear out the width that sticky-bits adds

            // make width appropriate for navbar
            var new_width = $("#content").outerWidth();
            $(e.target).width(new_width);

            changePage();


        })
        .on("sticky_kit:unstick", function(e) {
            
        });
}
