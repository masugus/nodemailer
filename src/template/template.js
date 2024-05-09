const generateEmailTemplate = (data) => {
  return `
    <html>
        <head>
            <style>
                table {
                    border-collapse: collapse;
                    width: 100%;
                }
                th, td {
                    text-align: left;
                    padding: 8px;
                }
                tr:nth-child(even) {background-color: #f2f2f2;}
            </style>
        </head>
        <body>
            <h2 style="text-align:center;">Respuesta de la Boda</h2>
            <table>
                <tr>
                    <td>Asistencia</td>
                    <td>${data.Asistencia || ""}</td>
                </tr>
                <tr>
                    <td>Autobus</td>
                    <td>${data.Autobus || ""}</td>
                </tr>
                <tr>
                    <td>Invitado</td>
                    <td>${data.Invitado || ""}</td>
                </tr>
                <tr>
                     <td>Alergias Invitado</td>
                     <td>${data.Alergia_invitado || "NO"}</td>
                </tr>
                ${
                  data.Nombre_acompañante 
                   ? `<tr><td>Nombre acompañante</td><td>${data.Nombre_acompañante}</td></tr>
                    <tr><td>Alergias acompañante</td><td>${data.Alergia_acompanante || "NO"}</td></tr>`
                   : ""
                  }
                ${
                  data.Numero_niños
                     ? `<tr><td>Número de niños</td><td>${data.Numero_niños}</td></tr>
                        <tr><td>Alergias niños</td><td>${data.Alergia_ninos || "NO"}</td></tr>`
                      : ""
                      }
                <tr>
                    <td>Voy Viernes</td>
                    <td>${data.Voy_Viernes || ""}</td>
                </tr>
                ${
                  data.Canciones_preferidas
                    ? `
                <tr>
                  <th colspan="5">Canciones</th>
                </tr>
                <tr>
                  <th>Nombre canción</th>
                  <th>Artista</th>
                  <th>Link Spotify</th>
                  <th>Preview canción</th>
                  <th>Imágen del Album</th>
                </tr>
                ${data.Canciones_preferidas.map(
                  (song) => `
                <tr>
                  <td>${song.trackName}</td>
                  <td>${song.artistName}</td>
                  <td><a href="https://www.google.com/search?q=${encodeURIComponent(song.trackUri)}">Link a la canción</a></td>
                  <td>${
                    song.previewUrl
                      ? `<a href="${song.previewUrl}">Preview Canción</a>`
                      : "No hay Preview disponible"
                  }</td>
                  <td><img src="${
                    song.albumImage
                  }" alt="Album Image" width="50" height="50"></td>
                </tr>
                `
                ).join("")}`
                    : ""
                }
                </table>
        </body>
    </html>
    `;
};

module.exports = { generateEmailTemplate };
