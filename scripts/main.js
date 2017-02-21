"use strict";

console.log("When you eliminate the impossible, whatever remains, however improbable, must be the truth.");

let addbutton = $(".addbutton"),
    addSong = $(".song-name"),
    addArtist = $(".artist-name"),
    addAlbum = $(".album-name"),
    Handlebars = require("hbsfy/runtime"),
    mainSongs = require("./getMusic.js"),
    secondSongs = require("./getMoreSongs.js"),
    songTemplate = require("../templates/musicHistory.hbs"),
    deleteIt = require("./events.js");


function populatePage(songsFromJsons){
    let newSection = document.createElement("section");
    newSection.innerHTML = songTemplate(songsFromJsons);
    $("#main-songs").append(newSection);
    deleteIt();

}

mainSongs.loadSongs()
.then(
    function(successfulJsonGet) {
        populatePage(successfulJsonGet);
        console.log("musicListOnePromise", successfulJsonGet);
},

function(reason) {
    console.log("you broke it");
});

$(".moreButton").click(function(){
    secondSongs.loadSongsAgain()
    .then(
        function(successfulJsonGet) {
            populatePage(successfulJsonGet);
            console.log("musicListTwoPromise", successfulJsonGet);
    },

    function(reason) {
        console.log("you broke it");
    });
});
