const nodemailer = require('nodemailer');
const config = require('../config');
const SpotifyApi = require("@spotify/web-api-ts-sdk");
const spotify = SpotifyApi.SpotifyApi;
console.log(SpotifyApi.SpotifyApi)
// Configura tu cliente de Spotify

const spotifyApi =  spotify.withClientCredentials(config.spotifyClientId,
    config.spotifyClientSecret);
  
  // Asegúrate de que tu token de acceso está configurado
//   spotifyApi.setAccessToken('your_access_token');

async function searchTracks(trackName) {
    console.log('POST RECIBIDO SearchTracks');

    try {
        const res = await spotifyApi.search(trackName, ["track"],"ES", 5 );
        return res;
      } catch (err) {
        console.log('Error al buscar las canciones', err);
        throw err;
      }
}

module.exports = { searchTracks };