async function updateLastFm() {

  const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=karukisiieg&api_key=f615fadb858038f5e0f60a6ddfbad6ea&format=json&limit=1`);
  const data = await res.json();
  const track = data.recenttracks.track[0];

  document.querySelector('.lastfm .songLink').href = track.url;
  document.querySelector('.lastfm .cover').src = track.image[3]["#text"];
  document.querySelector('.lastfm .title').textContent = track.name;
  document.querySelector('.lastfm .artist').textContent = track.artist["#text"];

  if (track["@attr"] && track["@attr"].nowplaying === "true") {
    document.querySelector('.lastfm .listening').textContent = "Estou Ouvindo Agora...";
  } else {
    document.querySelector('.lastfm .listening').textContent = "Última Música Ouvida";
  }
  

}

// Funções Constantes //
updateLastFm();
setInterval(updateLastFm, 30000);