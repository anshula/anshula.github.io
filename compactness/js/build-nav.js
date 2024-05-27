
/*-------------------------------------------------------*/
/*  Check if user is on mobile, and if so, eventually collapse the navbar     */
/*-------------------------------------------------------*/
window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  if ((window.innerWidth <= 800 ) && ( window.innerHeight <= 600 )) {check = true}   // even if the  name doesn't match a mobile device, if resolution is low enough, say it is mobile.
  return check;
};

/*-------------------------------------------------------*/
/* Call all the steps below in order...
/*-------------------------------------------------------*/
function buildNav() {
    wrapUpContent()
    addNavBarOpener()
    populateNavBar()
    activateMenuButton()
    if (window.mobileCheck()) { $(".navbarcollapsebutton").click() }
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