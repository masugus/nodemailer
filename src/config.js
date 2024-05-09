require('dotenv').config();

module.exports = {
    emailAddress: process.env.EMAIL_ADDRESS,
    emailPassword: process.env.EMAIL_PASSWORD,
    emailSender: process.env.EMAIL_SENDER,
    host: process.env.HOST_SENDGRID,
    port: process.env.PORT_SENDGRID,
    to: process.env.MAIL_TO,
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    bbcMail: process.env.BBC_MAIL
};