"use strict";

var songList = {};

songList.loadSongs = function(){
    return new Promise(function(resolve, reject) {
        let musicLoader = new XMLHttpRequest();
        musicLoader.open("GET", "musicList.json");
        musicLoader.send();

        musicLoader.addEventListener("load", function(){
            var songData = JSON.parse(this.responseText);
            resolve(songData);
        });
    });
};


module.exports = songList;
