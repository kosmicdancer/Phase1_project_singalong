
// ## objective
// Declare Functions needed
//     -fetch data from https://api.lyrics.ovh


const baseUrl = 'https://api.lyrics.ovh'

const getSuggest = () => {
    const searchInput = `${baseUrl}/suggest/:term/?_limit=5`
    return fetch (searchInput) 
    .then(r => r.json())
    
}
getSuggest().then(objectData => console.log(objectData));

//     -create song-artist suggestion div
const suggestDiv = document.querySelector('#suggest-container')

const createSuggestDiv = (data) => {
    const div = document.createElement('div'),
        suggestUl = document.createElement('ul'),
        artist_titleli = document.createElement('li');
        
    suggestUl.innerHTML = data.artist
    artist_titleli.innerHTML = data.
    

    div.appendChild(suggestUl)
    suggestUl.appendChild(artist_titleli)
    artist_titleli.appendChild(title, artist)
    


    return div; 
}


    


const testdata = {
}

//     -display lyrics
const createLyricsDiv = () => {

}



