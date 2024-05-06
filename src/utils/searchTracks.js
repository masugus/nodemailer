const nodemailer = require('nodemailer');
const config = require('../config');

// Configura tu cliente de Spotify
const spotifyApi = new SpotifyWebApi({
    clientId: 'your_client_id',
    clientSecret: 'your_client_secret',
    redirectUri: 'your_redirect_uri',
  });
  
  // Asegúrate de que tu token de acceso está configurado
  spotifyApi.setAccessToken('your_access_token');

async function searchTracks(to, subject, html) {
    console.log('POST RECIBIDO SearchTracks');

    try {
        const data = await spotifyApi.searchTracks(`track:${req.params.trackName}`);
        res.json(data.body);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

module.exports = { searchTracks };