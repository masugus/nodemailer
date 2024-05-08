
const { searchTracks } = require("../utils/searchTracks");
const config = require("../config");

async function searchTracksController(req, res) {
  console.log("body del request searchTracksController" , req.body);
  let body;
  try {
    // Intenta parsear el body a JSON
    body = JSON.parse(req.body);
  } catch (error) {
    // Si el parse falla, usa el body original
    body = req.body;
  }
  try {
    console.log('body', body)
    const response = await searchTracks(body.trackName);
    // console.log('RESPUESTA: => ',response)
    const data = extractTrackInfo(response);
    // console.log('DATA: => ',data)
    res
      .status(200)
      .json({data: data, message: `Canciones encontradas correctamente`});
  } catch (error) {
    res.status(500).json({ error: "Error al buscar las canciones"});
    console.log(error)
  }
}
function extractTrackInfo(data) {
    return data.tracks.items.map(item => {
      return {
        trackName: item.name,
        trackUri: item.uri,
        artistName: item.artists[0].name,
        previewUrl: item.preview_url,
        idTrack: item.id,
        albumImage: item.album.images[0].url
      };
    });
  }

module.exports = { searchTracksController };