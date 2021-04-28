
// ## objective
// Declare Functions needed
// -fetch data from https://api.lyrics.ovh
const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const clear = document.getElementById('clear-search');

const baseUrl = 'https://api.lyrics.ovh';

async function searchSongs(term) {
    const res = await fetch(`${baseUrl}/suggest/${term}`);
    const data = await res.json();
    showSuggestion(data); 
}
// Declare Functions needed
// -Show search result suggestions 
function showSuggestion(data) {
    let suggestion = '';

    data.data.forEach(song => {
        suggestion += `
        <li>
            <span><strong>${song.artist.name}</strong> - ${song.title}</span>
            <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
        </li>
        `;
    });

    result.innerHTML = `
      <ul class="songs">
        ${suggestion}
      </ul>  
    `;
}

//-create song-artist suggestion div
//-create search box (form)

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
})

// Declare Functions needed
//Get lyrics for song
async function getLyrics(artist, songTitle) {
    const res = await fetch(`${baseUrl}/v1/${artist}/${songTitle}`);
    const data = await res.json();

    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');

    result.innerHTML = `<h2><strong>${artist}</strong> - ${songTitle}</h2>
    <span>${lyrics}</span>`;
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

//Get lyrics event listener button click
result.addEventListener('click', e => {
    const clickedEl = e.target;

    if (clickedEl.tagName === 'BUTTON') {
        const artist = clickedEl.getAttribute('data-artist');
        const songTitle = clickedEl.getAttribute('data-songtitle');

        getLyrics(artist, songTitle);
    }
});

clear.addEventListener('click', e => {
    location.reload();
     
});