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

const View = (() => {
    let template = "";

    const domString = {
        searchBarInput: ".search-bar__input",
        content: ".content"
    };

    const addToTemplate = (albumTitle, thumbnail) => {
        template += `
        <div class="card">
            <img src=${thumbnail}>
            <p>${albumTitle}</p>
        </div>
        `;
    }

    const render = (element) => {
        element.innerHTML = template;
    }

    const reset = (element) => {
        element.innerHTML = "";
        template = "";
    }

    return {
        domString,
        addToTemplate,
        render,
        reset
    }
})();