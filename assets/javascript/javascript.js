
 
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
            transitionSpeed: 5000
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
  
  
  // Get the modal
  var modal = document.getElementById('id01');
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  
  
  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyDK5bKY5Pqm0_gg_mbnOo6UPmIQHbaZNC4",
      authDomain: "project1-f4f3e.firebaseapp.com",
      databaseURL: "https://project1-f4f3e.firebaseio.com",
      projectId: "project1-f4f3e",
      storageBucket: "project1-f4f3e.appspot.com",
      messagingSenderId: "303098997727"
    };
    firebase.initializeApp(config);
  
    var usersRef = firebase.database().ref("/users");
  
  var mainDB = firebase.database().ref();
  
  usersRef.once("value").then(function(snapshot) {
      console.log(snapshot.val());
  })

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

  // Nav Bar //
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
//   $(document).ready(function(){
  
//     $(".signin").click(function(){
//       $("#modal-singin").modal();
      
//     })
//   });
  
    