
 //GAMIN BEGINS//
var granimInstance = new Granim({
  element: '#canvas-interactive',
  name: 'interactive-gradient',
  elToSetClassOn: '.canvas-interactive-wrapper',
  direction: 'diagonal',
  opacity: [1, 1],
  isPausedWhenNotInView: true,
  stateTransitionSpeed: 500,
  states : {
      "default-state": {
          gradients: [
              ['#B3FFAB', '#12FFF7'],
              ['#ADD100', '#7B920A'],
              ['#1A2980', '#26D0CE'],
              ['#9D50BB', '#6E48AA'],
              ['#4776E6', '#8E54E9'],
              ['#FF4E50', '#F9D423']
          ],
          transitionSpeed: 10000
      },
  }
});
//GAMIN ENDS//

// Nav Bar //
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function(){

  $(".signin").click(function(){
    $("#modal-singin").modal();
    
  })
});