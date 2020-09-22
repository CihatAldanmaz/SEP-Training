let artisticName;
//key press enter event
const input = document.querySelector('input');
input.addEventListener("keypress", e =>{
    if (e.key === "Enter"){
        artisticName = input.value;
        getAlbums(artisticName);
        input.value = null;
    }
});

//click event
const find = document.querySelector('.find');
find.addEventListener("click", e=>{
    artisticName = input.value;
    getAlbums(artisticName);
    input.value = null;
});

//async get data
function getAlbums(name){
    fetch(`https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=50`)
    .then(res => res.json())
    .then(data => renderResults(data))
}

//render data for html page
function renderResults(data){
    //destructuring object
    const {resultCount, results} = data;
    let tmp = "";
    results.forEach(item => {
        const albumTitle = item.collectionName;
        const albumImgUrl = item.artworkUrl100;
        tmp += `<div class="card">
        <img src="${albumImgUrl}" alt="">
        <div class="album-name">${albumTitle}</div>
        </div>`
    });
    const section = document.querySelector("section");
    section.innerHTML = tmp;
    const resultTitle = document.querySelector(".result");
    resultTitle.innerHTML = `${resultCount} Results for "${artisticName}"`;
    console.log(resultTitle.classList);
    resultTitle.classList.remove("is-visible");
    const initialPage = document.querySelector(".initial-page");
    initialPage.style.display = "none";
}

