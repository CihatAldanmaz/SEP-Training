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
        content: ".content",
        heading: "h2"
    };

    const addToTemplate = (albumTitle, thumbnail) => {
        template += `
        <div class="card">
            <img src=${thumbnail}>
            <p>${albumTitle}</p>
        </div>
        `;
    }

    const render = (content, heading, resultCount, input) => {
        content.innerHTML = template;
        heading.innerHTML = `${resultCount} results for "${input}"`;
    }

    const reset = (content) => {
        content.innerHTML = "";
        template = "";
    }

    return {
        domString,
        addToTemplate,
        render,
        reset
    }
})();

const Controller = ((model, view) => {
    
    document.querySelector(view.domString.searchBarInput).addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const input = e.target.value;

            if (input === "") {
                return;
            }

            view.reset(document.querySelector(view.domString.content));

            model.fetchResults(input).then((data) => {
                data.results.forEach((album) => {
                    view.addToTemplate(album.collectionName, album.artworkUrl100);
                })

                view.render(document.querySelector(view.domString.content), 
                document.querySelector(view.domString.heading), 
                data.resultCount, 
                input);
            })

            e.target.value = "";
        }
    });
})(Model, View);