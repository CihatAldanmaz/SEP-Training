// const artistName = 'patrick';
// const artistName = ''

const searchAPIs = (() => {
  const ARTIST_NAME = document.querySelector('.searchInput__content');

  const baseUrl = 'https://itunes.apple.com/search?';
  console.log(ARTIST_NAME);
  const searchPath = `term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`;

  const getSearchResult = () => 
    // fetch(baseUrl + searchPath).then((res) => res.json()).then(json => console.log(json));
    fetch(baseUrl + searchPath).then((res) => res.json());
  
  return {
    getSearchResult,
  };
})();


const View = (() => {
  const domString = {
    albumList: '.albumList__content',
    searchInput: '.searchInput__content',
    searchButtom: '.searchButtom',
  };
  const renderInnerHTML = (htmlTemplate, element) => {
    element.innerHTML = htmlTemplate;
  };

  const generateAlbumListTmp = function(albumArr) {
    let albumArrTmp = '';
    albumArr.forEach((album) => {
      albumArrTmp += `<img src=${album.artworkUrl100}>`;
    });

    return albumArrTmp;
  };
})();


const Model = ((api) => {
  class Album {
    constructor(albumId, artistId, albumName, artistName) {
      this.albumId = albumId;
      this.artistId = artistId;
      this.albumName = albumName;
      this.artistName = artistName;
    }
  }

  const fetchAblum = api.getSearchResult;

  return {
    fetchAblum,
  }
})(searchAPIs);


const Controller = ((view, model) => {
  class State {
    constructor() {
      this._albumList = [];
      this._searchInput = '';
    };

    get searchInput() {
      return this._searchInput;
    };

    set searchInput(newValue) {
      this._searchInput = newValue;
      const searchInput = document.querySelector(view.domString.searchInput);
      searchInput.value = this._searchInput;
    };

    get albumList() {
      return self._albumList; 
    };

    set albumList(newList) {
      this._albumList = newList;
      
      const tmp = view.generateAlbumListTmp(this._albumList);
      const albumElement = document.querySelector(view.domString.albumList);

      view.renderInnerHTML(tmp, albumElement);
    }
  }

  const state = new State();

  const searchAlbumInputEvent = () => {
    const searchInput = documnet.querySelector(view.domString.searchInput);
    searchInput.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        model.fetchAblum().then((data) => {
          state.AlbumList = data;
        });
        state.searchInput = '';
      }
      state.searchInput = event.target.value;
    });
  };

  const initAlbumList = () => {
    searchAlbumInputEvent();
    model. 
  }
})
// const Model = ((api) => {
//   class Search {

//   }
// })()

console.log(searchAPIs.getSearchResult());