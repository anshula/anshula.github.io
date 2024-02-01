


function buildNav() {
    wrapUpContent()
    addNavBarOpener()
    populateNavBar()
    activateMenuButton()
    $(".navbarcollapsebutton").click()
}

/*-------------------------------------------------------*/
/*  Wrap up the existing content in a #content tag       */
/*-------------------------------------------------------*/
function wrapUpContent() {
    $("body").wrapInner('<div id="content"></div>');
}

/*-------------------------------------------------------*/
/*  Add nav bar opener      */
/*-------------------------------------------------------*/
function addNavBarOpener() {
    var navBarCode = `
        <!-- Navbar -->
         <div id="navbarcontainer">
            <div id="navbar">
               <div id="notscrollable">
                  <div class="title">
                     <a href="#">
                     Compactness
                     </a>
                  </div>
                  <a href="http://anshula.com" target="_blank">
                   <div class="author">
                     by Anshula 
                  </div>
                  </a>
               </div>

               <div id="scrollable">
                  <div>
                     <div class="chapter" id="compactness">
                        <a href="#" class="chaptitle">Table of Contents</a>
                     </div>
                  </div>
               </div>

            </div>
         </div>
         <!-- /Navbar -->
    `

    $("body").prepend(navBarCode)
    

}




/*-------------------------------------------------------*/
/* For dynamically building the navbar based on content */
/*-------------------------------------------------------*/

function populateNavBar() {

    // Find all h2 elements in the content
        var h2Elements = document.querySelectorAll('#content h2');

        // Create and populate the sidebar with links to h2 elements
        var sidebar = document.getElementById('compactness');
        var sidebarContent = '';
        h2Elements.forEach(function (element, index) {
            // Assign an id to each h2 element if it doesn't have one
            if (!element.id) {
                element.id = 'section' + (index + 1);
            }

            sidebarContent += '<a href="#' + element.id + '"><div class="subchaptitle">' + element.textContent + '</div></a>';
        });
        sidebarContent += '';
        sidebar.innerHTML += sidebarContent;
}


/*-------------------------------------------------------*/
/* Make navbar collapse button work */
/*-------------------------------------------------------*/

function activateMenuButton() {

    var navbarCollapseButton = `
    <button class="change navbarcollapsebutton">
        <div class="menuicon">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>
    </button>    
    `

    $("#content").prepend(navbarCollapseButton)


    $(".navbarcollapsebutton").click(function(){ 

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
        }, duration=200) /* just a little bit faster than duration of #navbarcontainer in css file */

   
    });
}