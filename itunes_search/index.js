document.addEventListener("DOMContentLoaded", () => {
  let ARTIST_NAME;
  const url = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`;

  const inputValue = document.querySelector(".form_search-input");
  const form = document.querySelector("form");
  const submit_Btn = document.querySelector(".artist_search-btn");

  const state = {
    searchTerm: "",
    isSubmitted: false,
  };
  inputValue.addEventListener("change", (event) => {
    state.searchTerm = event.target.value;
  });

  async function getArtist(name) {
    return await fetch(
      `https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=50`,
      {
        method: "GET",
        mode: "cors",
      }
    ).then((res) => res.json());
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    state.isSubmitted = true;

    const div = document.createElement("div");
    div.classList.add('artist-list')
    getArtist(state.searchTerm).then((data) => {
        document.querySelector('h2').innerHTML = `${data.results.length} results for "${state.searchTerm}"`
      data.results.forEach((el) => {
        console.log(el);
        const albumCard = document.createElement("div");
    div.classList.add('album-card')
        const p = document.createElement("p");
        const img = document.createElement("IMG");

        img.src = el.artworkUrl100;
        p.innerHTML = el.collectionName;
        document.querySelector("body").appendChild(div);
        div.appendChild(albumCard)
        albumCard.appendChild(p);
        albumCard.appendChild(img);
      });
    });
    if(state.isSubmitted === true){
    form.reset();
    const artistList = document.querySelector('.artist-list')
    document.querySelector('body').removeChild(artistList)
    state.isSubmitted = false
    }
  });
});
