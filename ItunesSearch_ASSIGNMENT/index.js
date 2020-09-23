const albumList    = document.querySelector('.albumList');
const searchBar    = document.querySelector('.searchBar');
const searchResult = document.querySelector('.searchResult');
// Add eventListner to our input
searchBar.addEventListener('keyup', (e) => {
    if(e.code === 'Enter') {
        const ARTIST_NAME = e.target.value;
        console.log(ARTIST_NAME);
        loadAlbums(ARTIST_NAME);
    }
});


// fetch albums and call display
const loadAlbums = async (ARTIST_NAME) => {
    try {
        const cors = `https://cors-anywhere.herokuapp.com/`;
        const url = cors + `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`;
        const res = await fetch(url);
        let albums = await res.json();

        console.log(albums);
        displayResult(ARTIST_NAME, albums.results.length);
        displayAlbums(albums);
    } catch (err) {
        console.error(err);
    }
};

const displayResult = (input, length) => {
    const resultStr = length > 1 ? 'results': 'result';
    searchResult.innerHTML = `${length} ${resultStr} for "${input}"`;
}

// setup our html template and display it
const displayAlbums = (albums) => {
    console.log(albums);
    const htmlString = albums.results
        .map((album) => {
            return `
            <li class="album">  
                <a href=${album.collectionViewUrl}><img src="${album.artworkUrl100}"></img></a>
                <a href=${album.artistViewUrl}><h4>${album.artistName}</h4></a>  
            </li>`;
        })
        .join('');
    albumList.innerHTML = htmlString;
};


