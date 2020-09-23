
const itunesApis = (() => {
    const baseUrl = "https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50";

    const getAlbumByArtistName = (artist) => 
        fetch(`https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=50`)
        .then((res) => res.json())
        // .then((data) => console.log(data));
    return {
        getAlbumByArtistName 
    }
})();
// itunesApis.getAlbumByArtistName('kanye');

const View = (() => {
    const domString = {
        albumList: '.albumlist__content',
        artistInput: '.header__input',
        heading: '.heading',
        searchBtn: '.header__input-submit'
    }

    const renderInnerHTHML = (htmlTemplate, element) => {
        element.innerHTML = htmlTemplate;
    }

    const generateAlbumListTmp = (albumArr) => {
        console.log('Album Array: ' + albumArr)
        let albumListTmp = '';
        const albumObjToArr = Object.entries(albumArr);
        console.log(albumObjToArr);
        albumObjToArr[1][1].forEach((album) => {
            albumListTmp += `<div class="albumlist__content-item"><img src=${album.artworkUrl100} alt="album cover"><div><h4>${album.collectionName}</h4></div></div>`
        });
        return albumListTmp;
    }

    return {
        domString,
        renderInnerHTHML,
        generateAlbumListTmp
    }
})();

const Model = ((api) => {
    class Album {
        constructor(id, albumCover, albumName) {
            this.albumName = albumName;
        }
    }

    const fetchAlbums = api.getAlbumByArtistName;

    return {
        fetchAlbums,
        Album
    }
})(itunesApis);


const AppController = ((view, model) => {
    class State {
        constructor() {
            this._albumList = [];
            this._artistInput = ''; 
            this._heading = ''
        } 
        
        get albumList() {
            return this._albumList;
        };

        set albumList(newList) {
            console.log('new list: ' + newList)
            this._albumList = newList;
            const tmp = view.generateAlbumListTmp(this._albumList);
            const albumListElement = document.querySelector(view.domString.albumList);
            view.renderInnerHTHML(tmp, albumListElement);
        }

        get artistInput() {
            return this._artistInput;
        }

        set artistInput(newValue) {
            this._artistInput = newValue;
            const artistInput = document.querySelector(view.domString.artistInput);
            artistInput.value = this._artistInput;
        }

        get heading() {
            return this._heading;
        }

        set heading(newHeading) { 
            this._heading = newHeading;
            const heading = document.querySelector(view.domString.heading);
            heading.innerText = this._heading;
        }

    }
    const state = new State();

    const addArtistInputEvent = () => {
        const artistInput = document.querySelector(view.domString.artistInput);
        artistInput.addEventListener('keyup', (e) => {
            if(e.key === 'Enter') {
                console.log("artist input: " + state.artistInput);
                const artistName = state.artistInput;
                model.fetchAlbums(artistName).then((data) => {
                    console.log('data: ' + data);
                    state.albumList = data;
                    state.heading = `${data.resultCount} results for '${artistName}'`;
                    console.log('heading: ' + state.heading)
                });
                state.artistInput = '';
                
            }
            state.artistInput = e.target.value;
            
           
            // console.log("state: " +state);
        })
    }
    
    const init = () => {
        console.log('init');
        addArtistInputEvent();
    }

    return {
        init
    };

})(View, Model);

document.addEventListener('DOMContentLoaded', function() {
    AppController.init();
})
