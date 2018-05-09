$(document).ready(function () {
    // Hides the error modal when ok button is pressed
    $("#exit").on("click", function () {
        $("#errorMessage").modal("hide");
    });

    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active")
    });
    // Initial FireBase
    var config = {
        apiKey: "AIzaSyDK5bKY5Pqm0_gg_mbnOo6UPmIQHbaZNC4",
        authDomain: "project1-f4f3e.firebaseapp.com",
        databaseURL: "https://project1-f4f3e.firebaseio.com",
        projectId: "project1-f4f3e",
        storageBucket: "project1-f4f3e.appspot.com",
        messagingSenderId: "303098997727"
    };
    firebase.initializeApp(config);
    // Creating a variable for the firebase database

    var database = firebase.database();

    var expr = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //  When the login button is clicked allows user to login into the app with email and password
    $("#loginbutton").on("click", function (event) {
        event.preventDefault();
        var email = '';
        var password = '';

        var email = $("#login-email").val().trim();

        var password = $("#login-psw").val().trim();

        //log in 

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            $("#header").text("Error");
            $("#message").text(errorMessage);
            $("#errorMessage").modal("show");

        });
        setTimeout(function () {
            var user = firebase.auth().currentUser;

            if (user != null) {
                $("#modalForm1")[0].reset();
                $("#login").modal("hide");
                login();
            }
        }, (500));
    });
    function login() {
        $("#header").text("Logged In");
        $("#message").text("You have Successfully Signed In");
        $("#errorMessage").modal("show");
        setTimeout(function () { location.replace("sitepage.html") }, (1500));
    };
    // Allows user to create an account with a email and password to login into the app
    $("#signupbutton").on("click", function (event) {
        event.preventDefault();
        var email = '';
        var password = '';

        var email = $("#signup-email").val().trim();
        var password = $("#signup-psw").val().trim();
        if (email === "" || expr.test(email)) {
            $("#header").text("Error");
            $("#message").text("Please enter a valid Email address");
            $("#errorMessage").modal("show");
        }
        else if (password === "" || password.length < 6) {
            $("#header").text("Error");
            $("#message").text("Please enter a valid password ");
            $("#errorMessage").modal("show");
        }
        else {

            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                $("#header").text("Error");
                $("#message").text(errorMessage);
                $("#errorMessage").modal("show");

            });
            setTimeout(function () {
                var user = firebase.auth().currentUser;

                if (user != null) {
                    $("#modalForm2")[0].reset();
                    $("#signup").modal("hide");
                    $("#header").text("Signed Up");
                    $("#message").text("You have Successfully Signed up");
                    $("#errorMessage").modal("show");
                    setTimeout(function () { location.replace("sitepage.html") }, (1500));
                }
            }, (500));


        }
    });
    // Any time there is an auth state change hides and shows buttons and changes the userId for saving content
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            $("#main").removeClass("hidden");
            $("#logout").removeClass("hidden");
            console.log(user);
            $("#signUp").addClass("hidden")
            $("#logIn").addClass("hidden");
            var userId = firebase.auth().currentUser.uid;
            // Allows the user to create there on favorite with artist and song
            $("#addFavorite").on("click", function (event) {
                event.preventDefault();
                var artist = $("#artist").val().trim();
                var song = $("#song").val().trim();
                var newArtist = {
                    name: artist,
                    song: song,
                };

                // prevents user from just adding song or just adding artist
                if (artist === "" || song === "") {
                    $("#header").text("Error");
                    $("#message").text("You need to enter a Artist and Song");
                    $("#errorMessage").modal("show");
                }
                else if (!(/[a-zA-Z]/.test(artist)) || !(/[a-zA-Z]/.test(song))) {
                    console.log("Enter a Valid artist and song")
                    $("#header").text("Error");
                    $("#message").text("You need to enter a valid song and or artist");
                    $("#errorMessage").modal("show");
                }
                else {
                    // sets a reference to the userId and stores the artist and song into firebase
                    database.ref(userId).push(newArtist);
                    console.log("inside the function " + userId);
                }
                $("#artistForm")[0].reset();
                $("#artist-search").modal("hide");
            });
            // Takes the stored information from firebase and displays it on the page
            database.ref(userId).on("child_added", function (snapshot) {
                var name = snapshot.val().name;
                var song = snapshot.val().song;
                var tableBody = $("#favoritesTable > tbody")
                var tableRow = $("<tr>").addClass("favBody").attr("artist", name).attr("song", song);
                var tableData1 = $("<td>").text(name);
                var tableData2 = $("<td>").text(song);
                tableRow.append(tableData1).append(tableData2);
                tableBody.append(tableRow);
            });
        }
        else {
            console.log("logged out");
            $("#logout").addClass("hidden");
            $("#signUp").removeClass("hidden");
            $("#logIn").removeClass("hidden")
            $("#favoritesTable > tbody").empty();
            $("#main").addClass("hidden");

        };
    });
    $("#logout").on("click", function () {
        $("#header").text("Logged out");
        $("#message").text("You have Successfully logged out");
        $("#errorMessage").modal("show");
        firebase.auth().signOut().then(function () {
            // Sign-out successful.


        }).catch(function (error) {
            // An error happened.
        });
    });
    $(document).on("click", ".favBody", function () {
        var artist = $(this)[0].attributes[1].value;
        var song = $(this)[0].attributes[2].value;
        addMagic(artist, song);
    })
    // when an artist and a song are entered performs ajax calls to 3 apis
    $("#addMusic").on("click", function (event) {
        event.preventDefault();
        // Setting variables to make ajax call
        var artist = $("#artist").val().trim();
        var song = $("#song").val().trim();
        addMagic(artist, song);
        // Resets the form and hides the modal
        $("#artistForm")[0].reset();
        $("#artist-search").modal("hide");
    });

    function addMagic(artist, song) {
        // clears the divs for the videos, lyrics and the artist bio
        $("#videos").empty();
        $("#lyrics").empty();
        $("#bio").empty();
        var youtubeApi = "https://www.googleapis.com/youtube/v3/search";
        var apiKey = "AIzaSyDEym1vh-fifGJYrmrz0WsPCyQU6Uni6aQ";
        var query = artist + " " + song;
        var querys = query.replace(" ", "+");
        console.log(artist)
        console.log(/[a-zA-Z]/.test(artist) || /[a-zA-Z]/.test(song));
        if (artist === "" || song === "") {
            $("#header").text("Error");
            $("#message").text("You need to enter a Artist and Song");
            $("#errorMessage").modal("show");
        }
        else if (!(/[a-zA-Z]/.test(artist)) || !(/[a-zA-Z]/.test(song))) {
            console.log("Enter a Valid artist and song")
            $("#header").text("Error");
            $("#message").text("You need to enter a valid song and or artist");
            $("#errorMessage").modal("show");
        }
        else {
            // making ajax call to the youtube api
            $.ajax({
                url: youtubeApi,
                data: {
                    key: apiKey,
                    part: "snippet",
                    type: "video",
                    q: querys,
                    order: "viewCount",
                    maxResults: 10
                },
                method: "GET"
            })
                // Takes the information for the youtube api and appends the title of the song and the video to the page
                .then(function (response) {

                    var results = response.items;
                    var count = 0;
                    for (var i = 0; i < results.length; i++) {
                        console.log(results);
                        var title = results[i].snippet.title
                        var titleCap = title.toUpperCase();
                        var songCap = song.toUpperCase();
                        console.log(title)
                        var titles = $("<h2>").text(title);
                        var videoId = results[i].id.videoId;
                        var videoDiv = $("<div>");
                        var videoFrame = $("<iframe>");
                        var source = "https://www.youtube.com/embed/" + videoId;
                        if (titleCap.includes(songCap) && count === 0) {
                            videoFrame.attr("src", source).attr("frameborder", 0).attr("width", "600px").attr("height", "400px").attr("allowfullscreen", " ").attr("id", "iframe");
                            videoDiv.append(titles, videoFrame);
                            $("#videos").append(videoDiv);
                            count++;
                        }
                        else {

                        }

                    }

                });
            songs = song.replace(" ", "+");
            // Making an ajax call to the Musixmatch api to get the the track id 
            $.ajax({
                url: "https://api.musixmatch.com/ws/1.1/track.search",


                data: {
                    apikey: "fec873930376f5f5c372618b84d70381",
                    q: songs,
                    page: 1,
                    page_size: 1,
                    s_track_rating: "desc",
                    format: "jsonp",
                    callback: "jsonp_callback"
                },
                dataType: "jsonp",
                jsonpCallback: 'jsonp_callback',
                contentType: 'application/json',
                method: "GET"
            })
                .then(function (data) {
                    var trackId = data.message.body.track_list[0].track.track_id;
                    var title = data.message.body.track_list[0].track.track_name;
                    // Making another ajax call to the musixmatch api and getting the lyrics from the track id obtained in the first ajax call
                    $.ajax({
                        url: "https://api.musixmatch.com/ws/1.1/track.lyrics.get?",
                        data: {
                            apikey: "fec873930376f5f5c372618b84d70381",
                            track_id: trackId,
                            format: "jsonp",
                            callback: "jsonp_callback"
                        },
                        dataType: "jsonp",
                        jsonpCallback: 'jsonp_callback',
                        contentType: 'application/json',
                        method: "Get"
                    })
                        // Taking the info from the ajax call and appending it to the page with the title and the lyrics
                        .then(function (data) {
                            var capTitle = title.toUpperCase();
                            var capSong = song.toUpperCase();
                            var lyrics = data.message.body.lyrics.lyrics_body;
                            var lyricsDiv = $("<div>");
                            var hLyrics = $("<h2>").text(title);
                            var pLyrics = $("<p>").text(lyrics);
                            if (capTitle === capSong) {
                                lyricsDiv.append(hLyrics);
                                lyricsDiv.append(pLyrics);
                                $("#lyrics").append(lyricsDiv);
                            }
                        })
                });

            // Making an ajax call to the last.fm api to obtain the artist bio
            $.ajax({
                url: "https://ws.audioscrobbler.com/2.0/",
                data: {
                    method: "artist.getinfo",
                    api_key: "6b6d7e9814cf2cb428f0a568b1fa3659",
                    format: "json",
                    artist: artist,
                    lang: "en",
                },
            })
                // Taking the info obtained and appending it to the page
                .then(function (response) {
                    var bio = response.artist.bio.content;
                    var bioDiv = $("<div>");
                    var name = $("<h2>").text(artist);
                    var pBio = $("<p>").text(bio);
                    bioDiv.append(name);
                    bioDiv.append(pBio);
                    $("#bio").append(bioDiv);
                });
        };
    };



});