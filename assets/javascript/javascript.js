
//Karinabranch Code
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
  
//   // Get the modal
// var modal = document.getElementById('modal');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

  
//   // Initialize Firebase
//   var config = {
//       apiKey: "AIzaSyDK5bKY5Pqm0_gg_mbnOo6UPmIQHbaZNC4",
//       authDomain: "project1-f4f3e.firebaseapp.com",
//       databaseURL: "https://project1-f4f3e.firebaseio.com",
//       projectId: "project1-f4f3e",
//       storageBucket: "project1-f4f3e.appspot.com",
//       messagingSenderId: "303098997727"
//     };
//     firebase.initializeApp(config);
  
//     var usersRef = firebase.database().ref("/users");
  
//   var mainDB = firebase.database().ref();
  
//   usersRef.once("value").then(function(snapshot) {
//       console.log(snapshot.val());
//   })
  
//   firebase.initializeApp(config);

//   var database = firebase.database();

//   $("#signupbutton").on("click", function(event){
//     event.preventDefault();
//     var firstName = '';
//     var LastName = '';
//     var email = '';
//     var password = '';

//     var email = $("#signup-email").val().trim();
//     var password = $("#signup-psw").val().trim();
//     var firstName = $("#first-name").val().trim();
//     var lastName = $("#last-name").val().trim();
//     console.log(email);
//     console.log(password);

//     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//           errorCode = error.code;
//           errorMessage = error.message;
//         });
        
//     });    

//     $("#loginbutton").on("click", function(event){
//         event.preventDefault();
//         var email = '';
//         var password = '';
    
//         var email = $("#login-email").val().trim();
//         var password = $("#login-psw").val().trim();
        
//         console.log(email);
//         console.log(password);  

//         //log in 
//         firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log(email)
//         });
    
  //  });



