const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');

require('dotenv').config();
const app = express();
app.use(cors())

app.get('/', (req, res) =>{
  res.json('hi')
});

app.get('/food', async (req, res) =>{
  const passedQuery = req.query.q
  //checks request passed from frontend for multiple health parameters and concats them
  const passedHealth = () => {
    const passedParam = req.query.health;
    let concatParams = [];
    if(!passedParam) {return ''}
    //if only one param is passed it will be a string,  more than one = array
    if(typeof passedParam === 'string') {return '&health=' + passedParam}
    if(Array.isArray(passedParam)) {
      for(let x of passedParam) {
        concatParams.push('&health=' + x)
      } 
      return concatParams.join('');
    }
  };

  const url = `https://api.edamam.com/search?app_id=${process.env.API_ID}&app_key=${process.env.API_KEY}&to=30&q=${passedQuery}${passedHealth()}`
    try {
      const request = await axios.request(url);
      console.log(request)
      if (request.data.hits == 0) {
        console.log ('No results!');
      }
      res.json(request.data);
    }
    catch (e) {
      console.log(e);
    }
});

app.listen(process.env.PORT || 8000, () => console.log(`Server running on port ${PORT}`));