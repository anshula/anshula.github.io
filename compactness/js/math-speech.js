

// this can only be done after mathjax has finished rendering
function createMathCaptions() {
         var containers = document.getElementsByTagName("mjx-container");
         var containersList = Array.prototype.slice.call(containers);
         containersList.forEach((mjsContainer) => {
            var mathSpeech = mjsContainer.attributes.getNamedItem("aria-label").value
            var cap = document.createElement("mathcaption")
            cap.innerHTML = mathSpeech
            mjsContainer.appendChild(cap)
         }
      );
       // console.log('done with math cpations')
   

}

// this can only be done after createMathCaptions
function createWebReaderWidget() {
      if (typeof NRWebReader != 'undefined') {
          window['NRWebReader'] = new NRWebReader({
            widget_id: "prx8ek8e4z",  // DO NOT REMOVE. This is your widget ID for your WebReader
            bar : {
              settings_auto_scroll: true,
            },
          });
      }
      // console.log('done with widget')

}

function buildMathSpeech() {
   MathJax.typesetPromise().then(() => {
      // console.log('done typesetting mathjax')
      createMathCaptions()
      createWebReaderWidget()

      MathJax.typesetPromise();
   }).catch((err) => console.log(err.message));


}


     
