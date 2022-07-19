const express = require('express');
const router = express.Router();

require('dotenv').config();

const { Pool } = require('pg');
const pool = new Pool({
    host: process.env.DB_URL,
    port: 5432,
    user: 'yzlnssfd',
    password: process.env.DB_PASSWORD,
    database: 'yzlnssfd',
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});



const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      response.status(error.code).send(error.message);
      // throw error
    }
    response.status(200).json(results.rows)
  })
}


router.get('/', function(req, res, next) {
  // should get the users from the database, not accessible to normal users
  getUsers(req, res);
});

router.get('/:id', function(req, res, next) {
  // should get the user by id
  res.send('respond with a single user by id');
});

router.post('/', function(req, res, next) {
  // should create a new user in the database
  pool.query('INSERT INTO users (username, password, email, firstname, lastname, address, city, state, zip, phone, role) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)',
  [
    req.body.username,
    req.body.password,
    req.body.email,
    req.body.firstname,
    req.body.lastname,
    req.body.address,
    req.body.city,
    req.body.state,
    req.body.zip,
    req.body.phone,
    req.body.role
  ], (error, results) => {
    if (error) {
      res.status(error.code).send(error.message);
      // throw error
    }
    res.status(201).send(results.rows);
  }
  );
});

router.put('/:id', function(req, res, next) {
  // should update a user by id
  res.send('update a user by id');
});

router.delete('/:id', function(req, res, next) {
  // should delete a user by id
  res.send('delete a user by id');
});

module.exports = router;
