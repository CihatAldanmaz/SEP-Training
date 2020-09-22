window.onload = function() {
    let btn = document.querySelector("#btn");
    const searcharea = document.querySelector(".searcharea");
    const h1 = document.querySelector("h1");
    const result = document.querySelector(".result");

    btn.onclick = function() {
        const ARTIST_NAME = searcharea.value;
        alert(ARTIST_NAME)
        const cors = `https://cors-anywhere.herokuapp.com/`;
        const Url = cors + `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`;
        fetch(Url)
            .then(res => res.json()) //return a promise
            .then(data => { //json格式的数据
                h1.innerHTML = `${data.resultCount} results for "${ARTIST_NAME}"`;
                let arr = data.results;
                console.log(arr)
                arr.forEach(e => {
                    const res = document.createElement("div");
                    res.className = "res";
                    res.innerHTML = `<a href=${e.collectionViewUrl}><img src=${e.artworkUrl60} /> <p>${e.collectionName}</p></a>`;
                    result.append(res);
                })
            });
    }

}