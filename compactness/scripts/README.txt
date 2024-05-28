PROCESS

1) Export the Ulysses HTML (use format HTML > Comics) into the Downloads folder
2) Move process.sh into Downloads folder, then run the python file process.sh
3) Upload to GitHub 

============

DEVELOPMENT TIPS

- To customize the screen reader, see reference > for-reference-only-webreader.js, and ctrl-f for "settings_auto_scroll" to see more setting names.  Then insert the appropriate setting modification in process.sh after "widget_id".

- To hide stuff from the screenreader (but still show on the screen), removing the <nr-sentence> and <nr-word> tags around it DOESN'T work.  What does is making the text render as an SVG (in mathjax) then setting "visibility: hidden" to the "mjx-assistive-mml" tag in the custom-style.css.

- To hide stuff from the screen (but still show on the screenreader), set the CSS style of the element to have "height:0; overflow: hidden;"