# API that makes third party calls to the Edamam recipe API.

This repo is a simple API that was built to keep credentials secret while making third party calls to the Edamam recipe API. 
- Credentials are stored safely in environment variables which are loaded from a .env file. 
- The API receives parameters from the frontend in the form of query strings, checks if multiple parameters sharing the same name have been passed, and if so concatenates them. The resulting query string is then added to the end of the url which is used to make a request.

 [Edamam Documentation](https://developer.edamam.com/edamam-docs-recipe-api-v1)

## Dependencies
- express.js
- axios
- cors
- dotenv