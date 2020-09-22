document.querySelector('button').addEventListener('click', (e) => {
  // prevent refresh
  e.preventDefault();

  // get artist name
  const ARTIST_NAME = document.querySelector('input').value;
  const cors = `https://cors-anywhere.herokuapp.com/`;
  const URL =
    cors +
    `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`;

  //fetch data
  fetch(URL, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((json) => json.results)
    .then((results) => {
      document.querySelector(
        'h1'
      ).innerHTML = `${results.length} results for \'${ARTIST_NAME}\'`;

      document.querySelector('.albumSearch__results').innerHTML = '';

      results.forEach((result) => {
        const node = document.createElement('DIV');
        node.innerHTML = `<a href=${result.collectionViewUrl}><img src=${result.artworkUrl100} /></a><p>${result.collectionName}</p>`;
        node.classList.add('albumSearch__resultSingle');
        document.querySelector('.albumSearch__results').appendChild(node);
      });

      document.querySelector('input').value = '';
    });
});
