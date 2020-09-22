document.addEventListener('DOMContentLoaded', () => {
    let ARTIST_NAME
    const url = `https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=50`

    const inputValue = document.querySelector('.artist_search-input')
    const form  = document.querySelector('form')
    const submit_Btn = document.querySelector('.artist_search-btn')

    const state = {
        searchTerm :""
    }
    inputValue.addEventListener('change', (event) => {
        state.searchTerm = event.target.value
    })

    async function getArtist(name){
       return await fetch(`https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=50`, {
           method: 'GET', 
           mode: 'cors'
       }).then(res => res.json())
    }
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        getArtist(state.searchTerm).then(data => {
            console.log(data.results[0])
            data.results.forEach(el => {
            const p = document.createElement('p')
            const img = document.createElement('IMG')
            img.src = el.artworkUrl100
            p.innerHTML = el.artistName
            document.querySelector('body').appendChild(p)
            document.querySelector('body').appendChild(img)
            })
        })

    })
})
