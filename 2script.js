async function searchSongs() {
  const query = document.getElementById('searchInput').value;
  const resultsDiv = document.getElementById('results');
  const lyricsDiv = document.getElementById('lyrics');

  lyricsDiv.innerHTML = ''; // Clear lyrics
  resultsDiv.innerHTML = 'Searching...';

  const res = await fetch(`https://api.lyrics.ovh/suggest/${query}`);
  const data = await res.json();

  resultsDiv.innerHTML = '';
  data.data.slice(0, 10).forEach(song => {
    const div = document.createElement('div');
    div.className = 'song';
    div.innerText = `${song.artist.name} - ${song.title}`;
    div.onclick = () => getLyrics(song.artist.name, song.title);
    resultsDiv.appendChild(div);
  });
}

async function getLyrics(artist, title) {
  const lyricsDiv = document.getElementById('lyrics');
  lyricsDiv.innerHTML = 'Fetching lyrics...';

  const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
  const data = await res.json();

  lyricsDiv.innerHTML = `
    <h3>${artist} - ${title}</h3>
    <pre>${data.lyrics || 'Lyrics not found 😢'}</pre>
  `;
}
