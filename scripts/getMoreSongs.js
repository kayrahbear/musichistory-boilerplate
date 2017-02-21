"use strict";

var moreSongList = {};

moreSongList.loadSongsAgain = function(){
    return new Promise(function(resolve, reject) {
        let secondLoader = new XMLHttpRequest();
        secondLoader.open("GET", "musicListMore.json");
        secondLoader.send();

        secondLoader.addEventListener("load", function(){
            var moreData = JSON.parse(this.responseText);
            resolve(moreData);
        });
    });
};


module.exports = moreSongList;
