
// ## objective
// Declare Functions needed
//     -fetch data from https://api.lyrics.ovh
const form = document.getElementById('form');
const search = document.getElementById('search');
const suggest = document.getElementById('suggest');
const result = document.getElementById('result');

const baseUrl = 'https://api.lyrics.ovh';


async function searchSongs(term) {
    const res = await fetch(`${baseUrl}/suggest/${term}`);
    const data = await res.json();
    showData(data); 
}
// Declare Functions needed
//  -Show suggestions 
function showData(data) {
    let output = '';

    data.data.forEach(song => {
        output += `
        <li>
            <span><strong>${song.artist.name}</strong>${song.title}</span>
            <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
        </li>
        `;
    });

    result.innerHTML = `
      <ul class="songs">
        ${output}
      </ul>  
    `;
}

//      -create song-artist suggestion div
const suggestDiv = document.querySelector('#suggest-container')


//      -create search box (form)

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

})
    
//Get lyrics for song
async function getLyrics(artist, songTitle) {
    const res = await fetch(`${baseUrl}/v1/${artist}/${songTitle}`);
    const data = await res.json();

    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

    result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
    <span>${lyrics}</span>`;

    // more.innerHTML = '';
}

//Form Event listener submit
form.addEventListener('submit', e => {
    e.preventDefault();
    const searchTerm = search.value.trim();

    if(!searchTerm) {
        alert('Please type in a search term');
    } else {
        searchSongs(searchTerm);
    }
});

//Get lyrics button click
result.addEventListener('click', e => {
    const clickedEl = e.target;

    if (clickedEl.tagName === 'BUTTON') {
        const artist = clickedEl.getAttribute('data-artist');
        const songTitle = clickedEl.getAttribute('data-songtitle');

        getLyrics(artist, songTitle);
    }
});
