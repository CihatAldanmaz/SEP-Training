const api = (() => {

    const getResults = (ARTIST_NAME) => {
        const url = `
        https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50
        `;
        return fetch(url).then((res) => res.json());
    }

    return {
        getResults
    };
})();

const Model = ((api) => {

    const fetchResults = api.getResults;

    return {
        fetchResults
    };
})(api);