
function buildMathSpeech() {

   setTimeout(() => {
      var containers = document.getElementsByTagName("mjx-container");
      var containersList = Array.prototype.slice.call(containers);
      containersList.forEach((mjsContainer) => {
         var mathSpeech = mjsContainer.attributes.getNamedItem("aria-label").value
         console.log(mathSpeech)
         var cap = document.createElement("mathcaption")
         cap.innerHTML = mathSpeech
         mjsContainer.appendChild(cap)
      }
      );
   
   }, "1000"); // wait to do this for 1 second...so after mathjax has been rendered

     
}