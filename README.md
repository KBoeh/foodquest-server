# query-string-server

This repo is a simple server that was built to keep API credentials secret while making third party API calls. The server receives parameters from the frontend in the form of query strings, checks if multiple parameters sharing the same name have been passed, and if so concatenates them. The resulting query string is then added to the end of the url which is used to make a request.

Dependencies: express.js, axios, cors, dotenv