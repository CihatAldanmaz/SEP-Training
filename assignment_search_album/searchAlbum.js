const artistName = 'patrick';
const searchAPIs = ((ARTIST_NAME) => {
  const baseUrl = 'https://itunes.apple.com/search?';
  console.log(ARTIST_NAME);
  const searchPath = `term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`;

  const getSearchResult = () => 
    fetch(baseUrl + searchPath).then((res) => res.json()).then(json => console.log(json));
  
  return {
    getSearchResult,
  };
})(artistName);


const View = (() => {
  const domString = {
    albumList: '.albumList__content',
    searchInput: '.searchInput__content',
  };
  const renderInnerHTML = (htmlTemplate, element) => {
    element.innerHTML = htmlTemplate;
  };

  const generatealbumListTmp = function(albumArr) {
    let albumArrTmp = '';
    albumArr.forEach((album) => {
      albumArrTmp += `<img src=${album.artworkUrl100}>`;
    });

    return albumArrTmp;
  };
})();


const Model = ((api) => {
  class Album {
    constructor()
  }
})
// const Model = ((api) => {
//   class Search {

//   }
// })()

console.log(searchAPIs.getSearchResult());