const domString = {
    albumContent: '.album_content',
    albumInput: '.album_input'
}

const CORS = 'https://cors-anywhere.herokuapp.com/';
const baseUrl = 'https://itunes.apple.com/search?term';
const appendix = '&media=music&entity=album&attribute=artistTerm&limit=50';

const generateTmp = (albumArr) => {
    let albumTmp = '';
    albumArr.forEach((album) => {
        console.log(album);
        albumTmp += `<div class = "album_card" id = ${album.artistid}><img src=${album.artworkUrl100}/><h4 class = "card_text">${album.collectionName}</h4></div>`
    })
    return albumTmp;
}

const render = (template, element) => {
    console.log(element);
    element.innerHTML = template;
}

class State {
    constructor() {
        this._albums = [];
        this._inputText = '';
    };
    get albums() {
        return this._albums;

    };
    set albums(newAlbums) {
        this._albums = newAlbums;

        //render
        const element = document.querySelector(domString.albumContent);
        const template = generateTmp(this._albums);
        render(template, element);
    }
    get inputText() {
        return this._inputText;
    }
    set inputText(newValue) {
        this._inputText = newValue;
        const inputText = document.querySelector(domString.albumInput);
        inputText.value = newValue;
    }
}

state = new State();
const inputElement = document.querySelector(domString.albumInput);
inputElement.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    if (e.key === 'Enter') {
        console.log('fetch data');
        state.inputText = e.target.value;
        fetch(`${CORS}${baseUrl}=${state.inputText}${appendix}`).then((res) => res.json()).then((data) => {
            console.log(data);
            state.albums = data.results;
        })
    }
})