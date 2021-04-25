
// ## objective
// Declare Functions needed
//     -fetch data from https://api.lyrics.ovh

const baseUrl = 'https://api.lyrics.ovh'

const getSuggest = async () => {
    const searchInput = `${baseUrl}/suggest/${term}`
    const r = await fetch(searchInput);
    return await r.json();   
}
getSuggest().then(objectData => console.log(objectData));


//      -create song-artist suggestion div
const suggestDiv = document.querySelector('#suggest-container')

const createSuggestDiv = (data) => {
        suggestUl = document.createElement('ul'),
        artist_titleli = document.createElement('li');
        
    suggestUl.innerHTML = data.artist
    artist_titleli.innerHTML = data.
    

    div.appendChild(suggestUl)
    suggestUl.appendChild(artist_titleli)
    artist_titleli.appendChild(title, artist)

    return div; 
}

//      -create search box (form)
const searchForm = document.querySelector('#search-container')

searchForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const searchInput = evt.target.search.value;
})
    


// const testdata = {
// }

//     -display lyrics
// const createLyricsDiv = () => {

// }
