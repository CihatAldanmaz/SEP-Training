
function start_search() {

    let rawInput = document.getElementById('search');
    let input;
    if (rawInput) {
        input = rawInput.value.toLowerCase();
        let inputArr = input.split(' ');
        let searchTerms = '';
        for (let i = 0; i < inputArr.length; i++) {
            if (i === inputArr.length - 1) {
                searchTerms += inputArr[i];
            } else {
                searchTerms += inputArr[i] + '+';
            }

        }

        let modifiedURL = 'https://itunes.apple.com/search?term=' + searchTerms + '&media=music&entity=album&attribute=artistTerm&limit=50';
        // console.log(modifiedURL)
        // fetch(modifiedURL)
        //     .then(response => response.json())
        //     .then(json => console.log(json))

        // let input = document.getElementById('search');
        // input.addEventListener('keyup', (e) => {

        // })
        // return modifiedURL;
        console.log(modifiedURL)
    } 
    else {
        alert('Please enter a artist name...');
    }
}
// console.log(start_search());