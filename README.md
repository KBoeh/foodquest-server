# query-string-api

This repo is a simple API that was built to keep credentials secret while making third party calls. The API receives parameters from the frontend in the form of query strings, checks if multiple parameters sharing the same name have been passed, and if so concatenates them. The resulting query string is then added to the end of the url which is used to make a request.

## Dependencies
- express.js
- axios
- cors
- dotenv