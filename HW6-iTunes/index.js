
function start_search() {

    let rawInput = document.getElementById('search');
    let input;
    if (rawInput) {
        input = rawInput.value.toLowerCase();
        let inputArr = input.split(' ');
        var searchTerms = '';
        for (let i = 0; i < inputArr.length; i++) {
            if (i === inputArr.length - 1) {
                searchTerms += inputArr[i];
            } else {
                searchTerms += inputArr[i] + '+';
            }
        }

        // var modifiedURL = 'https://itunes.apple.com/search?term=' + searchTerms + '&media=music&entity=album&attribute=artistTerm&limit=50';
    }
    else {
        alert('Please enter a artist name...');
    }

    const cors = `https://cors-anywhere.herokuapp.com/`;
    const URL =
        cors +
        `https://itunes.apple.com/search?term=${searchTerms}&media=music&entity=album&attribute=artistTerm&limit=50`;

    handleResponse(URL)
}



function handleResponse(URL) {
    fetch(URL)
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => renderPage(json))
}

function renderPage(json){
    const{resultCount, results} = json;
    let htmlString = "";
    results.forEach(i => {
        const albumName = i.collectionName;
        const albumImgUrl = i.artworkUrl100;
        htmlString += `<div class="album">
        <img src="${albumImgUrl}" alt="Album Image">
        <div class="album-name">${albumName}</div>
        </div>`
    });

    const section = document.getElementsByTagName("section");
    section.innerHTML = htmlString;
    const resultTitle = document.querySelector(".result");
    resultTitle.innerHTML = `${resultCount} Results for "${artisticName}"`;
}