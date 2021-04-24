// 'use strict';

// const searchInput = ('#search-input');
// const results = ('#results');
// const apiUrl = 'https://api.lyrics.ovh';
// // var apiUrl = 'http://localhost:8080';
// const lyricsDiv = ('#lyrics');
// const timeoutSuggest = setTimeout(suggestions, 300);
// document.lyricsDiv.hide();
// searchInput.on('input', function() {
//   if (timeoutSuggest) {
//     clearTimeout(timeoutSuggest);
//   }
  
// });

// function removeResults() {
//   $('.result').remove();
// }

// function suggestions() {
//   const term = searchInput.val();
//   if (!term) {
//     removeResults();
//     return;
//   }
//   console.log("Search suggestions for", term);
//   $.getJSON(apiUrl + '/suggest/' + term, function (data) {
//     removeResults();
//     let finalResults = [];
//     let seenResults = [];
//     data.data.forEach(function (result) {
//       if (seenResults.length >= 5) {
//         return;
//       }
//       const t = result.title + ' - ' + result.artist.name;
//       if (seenResults.indexOf(t) >= 0) {
//         return;
//       }
//       seenResults.push(t);
//       finalResults.push({
//         display: t,
//         artist: result.artist.name,
//         title: result.title
//       });
//     });

//     const l = finalResults.length;
//     finalResults.forEach(function (result, i) {
//       const c = 'result';
//       if (i == l-1) {
//         c += ' result-last'
//       }
//       const e = $('<li class="' + c + '">' + result.display + '</li>');
//       results.append(e);
//       e.click(function () {
//         songLyrics(result);
//       });
//     });
//   });
// }
// function songLyrics(song) {
//   console.log("Search lyrics for", song);
//   removeResults();
//   lyricsDiv.slideUp();
//   $.getJSON(apiUrl + '/v1/' + song.artist + '/' + song.title, function (data) {
//     const html = '<h3 class="lyrics-title">' + song.display + '</h3>';
//     html += '<div class="copy-lyrics" id="copy-lyrics" data-clipboard-target="#thelyrics">Copy the lyrics <span id="copy-ok"></span></div>';
//     html += '<div id="thelyrics">' + data.lyrics.replace(/\n/g, '<br />') + '</div>';
//     lyricsDiv.html(html);
//     lyricsDiv.slideDown();
//     const copyl = new Clipboard('#copy-lyrics');
//     copyl.on('success', function(e) {
//       e.clearSelection();
//       $('#copy-ok').text(' - Done :-)');
//     });
//   });
// }

// Hide the link for Chrome extension if not using Chrome
// var isChromium = window.chrome,
//     winNav = window.navigator,
//     vendorName = winNav.vendor,
//     isOpera = winNav.userAgent.indexOf("OPR") > -1,
//     isIEedge = winNav.userAgent.indexOf("Edge") > -1,
//     isIOSChrome = winNav.userAgent.match("CriOS");

// if(!isIOSChrome && !(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false)) {
//   $('#dl-chrome-ext').hide();
// }




//## objective
// Functions needed
//     -fetch data from https://api.lyrics.ovh/v1/artist/


const apiUrl = 'https://api.lyrics.ovh'


const getSuggest = () => {
    const searchInput = 'https://api.lyrics.ovh/suggest/:term/?_limit=5'
    return fetch (searchInput) 
    .then(r => r.json())
    
}
getSuggest().then(data => console.log(data));

//     -create song-artist suggestion div
const createSuggestDiv = (data) => {
    const div = document.createElement('div'),
        suggestUl = document.createElement('ul'),
        artist_titleli = document.createElement('li'),
        singleSuggestUl = document.createElement('ul'),
        titleLi = document.createElement('li'),
        artistLi = document.createElement('li');
        
    suggestUl.innerHTML = data.array
    artist_titleli.innerText = data.artist

    div.appendChild(suggestUl)


    return div; 
}


    


const testdata = {
}

//     -display lyrics
const createLyricsDiv = () => {

}



