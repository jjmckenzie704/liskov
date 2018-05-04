$(document).ready(function(){

    $(".navbar-toggle").on("click", function(){
        $(this).toggleClass("active")
    })

    var config = {
        apiKey: "AIzaSyDK5bKY5Pqm0_gg_mbnOo6UPmIQHbaZNC4",
        authDomain: "project1-f4f3e.firebaseapp.com",
        databaseURL: "https://project1-f4f3e.firebaseio.com",
        projectId: "project1-f4f3e",
        storageBucket: "project1-f4f3e.appspot.com",
        messagingSenderId: "303098997727"
    };
    firebase.initializeApp(config);
    var database = firebase.database();
   
    $("#modalSignIn").on("click", function(){
        var email = $("#email").val().trim();
        var password = $("#password").val().trim();
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
          });
    });
    $("#createAccount").on("click", function(){
        var email = $("#email").val().trim();
        var password = $("#password").val().trim();
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
          });
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                $("#logout").classList.remove("d-none");
                console.log(user);
                $("#signIn").classList.add("d-none")
            }
            else{
                console.log("logged out");
                //$("#logout").classList.add("d-none");
                $("#signIn").classList.remove("d-none")
            };
        });
    });
    $("#addFavorite").on("click", function(event){
        event.preventDefault();
        var artist = $("#artist").val().trim();
        var song = $("#song").val().trim();
        var newArtist = {
            name: artist,
            song: song,
        };
        database.ref().push(newArtist);
        $("#artistForm")[0].reset()
    });

    database.ref().on("child_added", function(snapshot){
        var name = snapshot.val().name;
        var song = snapshot.val().song;
        $("#favoriteTable > tbody").append("<tr value = artist + '+' song><td>" + name + "</td><td>" + song + "</td></tr>")
    })
 

    $("#addMusic").on("click", function(event){
        event.preventDefault();
        var artist = $("#artist").val().trim();
        var song = $("#song").val().trim();
        var youtubeApi = "https://www.googleapis.com/youtube/v3/search";
        var apiKey = "AIzaSyDEym1vh-fifGJYrmrz0WsPCyQU6Uni6aQ";
        var query = artist + "+" + song;
        console.log(artist)
        $.ajax({
            url: youtubeApi,
            data:{
                key: apiKey,
                part: "snippet",
                type: "video",
                q: query,
                order: "viewCount",
                maxResults: 2
            },
            method: "GET"
        })
        .then(function(response){
            var results = response.items;
            for(var i = 0; i < results.length; i ++){
                var title =  $("<h2>").text(results[i].snippet.title);
                var videoId = results[i].id.videoId;
                var videoDiv = $("<div>");
                var videoFrame = $("<iframe>");
                var source = "https://www.youtube.com/embed/" + videoId;
                videoFrame.attr("src", source);
                videoDiv.append(title, videoFrame);
                $("#videos").append(videoDiv);

            }
            
        });

        
        $.ajax({
            url : "https://api.musixmatch.com/ws/1.1/track.search",
                

            data:{
                apikey: "fec873930376f5f5c372618b84d70381",
                q: query,
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
        .then(function(data){
            var trackId = data.message.body.track_list[0].track.track_id;
            var title = data.message.body.track_list[0].track.track_name;
    
            $.ajax({
                url: "https://api.musixmatch.com/ws/1.1/track.lyrics.get?",
                data:{
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
            .then(function(data){
                var lyrics = data.message.body.lyrics.lyrics_body;
                var lyricsDiv = $("<div>");
                var hLyrics = $("<h2>").text(title);
                var pLyrics = $("<p>").text(lyrics);
                lyricsDiv.append(hLyrics);
                lyricsDiv.append(pLyrics);
                $("#lyrics").append(lyricsDiv);
            })
        });
      $.ajax({
          url: "https://ws.audioscrobbler.com/2.0/",
          data:{
              method: "artist.getinfo",
              api_key: "6b6d7e9814cf2cb428f0a568b1fa3659",
              format: "json",
              artist: artist,
              lang: "en",
            },
        })
          .then(function(response){
              var bio = response.artist.bio.content;
              var bioDiv = $("<div>");
              var name = $("<h2>").text(artist);
              var pBio = $("<p>").text(bio);
              bioDiv.append(name);
              bioDiv.append(pBio);
              $("#bio").append(bioDiv);
          })
        $("#artistForm")[0].reset()

    });


   
   
    
});