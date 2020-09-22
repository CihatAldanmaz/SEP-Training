
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

    fetch(URL)
        .then(response => response.json())
        .then(json =>
            console.log(json)
        )
}



function handleResponse() {

}