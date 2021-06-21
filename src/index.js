const express = require('express')
const app = express()
const port = 4433
const fetch = require('node-fetch');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getPlayersList', (req, res) => {
    // var playersListJson = 
    let url = "https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json";
    let settings = { method: "Get" };

    

    fetch(url, settings)
      .then(res => res.json())
      .then((json) => {
          res.send(json)
      });
    
    
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})