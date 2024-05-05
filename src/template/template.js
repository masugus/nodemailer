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
                    <td>${data.Asistencia || ''}</td>
                </tr>
                <tr>
                    <td>Autobus</td>
                    <td>${data.Autobus || ''}</td>
                </tr>
                <tr>
                    <td>Invitado</td>
                    <td>${data.Invitado || ''}</td>
                </tr>
                ${data.Nombre_acompañante ? `<tr><td>Nombre acompañante</td><td>${data.Nombre_acompañante}</td></tr>` : ''}
                ${data.Numero_niños ? `<tr><td>Número de niños</td><td>${data.Numero_niños}</td></tr>` : ''}
                <tr>
                    <td>Voy Viernes</td>
                    <td>${data.Voy_Viernes || ''}</td>
                </tr>
                ${data.Canciones_preferidas ? `<tr><td>Canciones favoritas</td><td>${data.Canciones_preferidas}</td></tr>` : ''}
            </table>
        </body>
    </html>
    `;
}

module.exports = { generateEmailTemplate };