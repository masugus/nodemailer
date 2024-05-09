# Project Backend for a Wedding

This project is a small backend developed to handle certain functionalities for a wedding. The backend takes care of sending emails and searching for music tracks, among other things.

## Endpoints

The backend provides the following endpoints:

### POST /send-email

This endpoint is used to send a test email. It accepts a JSON request body with the details of the email to be sent.

### POST /search-track

This endpoint is used to search for music tracks. It accepts a JSON request body with the search details.

### GET /keep-alive

This endpoint is used to check if the server is running. It doesn't require any input parameters. If the server is running, it will respond with 'Server is running'. If the server doesn't respond within 10 seconds, it will respond with 'Server is down'.

## Installation and Usage

To install and use this project, first clone the repository. Then, install the dependencies with `npm install`. To start the server, use `npm start`.

Please make sure to set up the necessary environment variables for email sending and music track searching.

## Contribution

If you want to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT license.