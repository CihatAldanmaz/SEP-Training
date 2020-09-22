"use strict";

var artisticName; //key press enter event

var input = document.querySelector('input');
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    artisticName = input.value;
    getAlbums(artisticName);
    input.value = null;
  }
}); //click event

var find = document.querySelector('.find');
find.addEventListener("click", function (e) {
  artisticName = input.value;
  getAlbums(artisticName);
  input.value = null;
}); //async get data

function getAlbums(name) {
  fetch("https://itunes.apple.com/search?term=".concat(name, "&media=music&entity=album&attribute=artistTerm&limit=50")).then(function (res) {
    return res.json();
  }).then(function (data) {
    return renderResults(data);
  });
} //render data for html page


function renderResults(data) {
  //destructuring object
  var resultCount = data.resultCount,
      results = data.results;
  var tmp = "";
  results.forEach(function (item) {
    var albumTitle = item.collectionName;
    var albumImgUrl = item.artworkUrl100;
    tmp += "<div class=\"card\">\n        <img src=\"".concat(albumImgUrl, "\" alt=\"\">\n        <div class=\"album-name\">").concat(albumTitle, "</div>\n        </div>");
  });
  var section = document.querySelector("section");
  section.innerHTML = tmp;
  var resultTitle = document.querySelector(".result");
  resultTitle.innerHTML = "".concat(resultCount, " Results for \"").concat(artisticName, "\"");
  console.log(resultTitle.classList);
  resultTitle.classList.remove("is-visible");
  var initialPage = document.querySelector(".initial-page");
  initialPage.style.display = "none";
}