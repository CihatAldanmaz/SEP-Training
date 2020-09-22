const albumList = document.querySelector('.albumList');

let albums = [];

const loadAlbums = async () => {
    const ARTIST_NAME = 'pattrick';
    try {
        const cors = `https://cors-anywhere.herokuapp.com/`;
        const url = cors + "https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50";
        const res = await fetch(url);
        albums = await res.json();
        console.log(albums);
        displayAlbums(albums);
    } catch (err) {
        console.error(err);
    }
};

const displayAlbums = (albums) => {
    console.log(albums);
    const htmlString = albums.results
        .map((album) => {
            return `
            <li class="album">  
                <img src="${album.artworkUrl100}"></img>
                <h4>${album.artistName}</h4>  
            </li>`;
        })
        .join('');
    albumList.innerHTML = htmlString;
};

loadAlbums();

