const express = require('express');
const router = express.Router();

require('dotenv').config();

const axios = require("axios").default;

const options = {
  method: 'POST',
  url: 'https://YOUR_DOMAIN/oauth/token',
  headers: {'content-type': 'application/x-www-form-urlencoded'},
  data: new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: process.env.AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_CLIENT_SECRET,
    audience: process.env.AUTH0_AUDIENCE
  })
};

const token = axios.request(options).then(function (response) {
  console.log(response.data, 'this is the response data from axios auth0 call');
  return response.data;
}).catch(function (error) {
  console.error(error);
});

const getUser = () => {
  fetch(process.env.AUTH0_AUDIENCE + '/users', {
    headers: {
      'Authorization': 'Bearer ' + token.acces_token,
      'Content-Type': 'application/json'
      }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      }
    )
    .catch(error => console.log(error));
}

router.get('/', (req, res) => {
  return getUser();
});

module.exports = router;
