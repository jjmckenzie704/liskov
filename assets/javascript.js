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
              ['#1A2980', '#26D0CE']
          ],
          transitionSpeed: 10000
      },
      "violet-state": {
          gradients: [
              ['#9D50BB', '#6E48AA'],
              ['#4776E6', '#8E54E9']
          ],
          transitionSpeed: 2000
      },
      "orange-state": {
          gradients: [ ['#FF4E50', '#F9D423'] ],
          loop: false
      }
  }
});
//GAMIN ENDS//



