const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  // should get the users from the database, not accessible to normal users
  res.send('respond with all users in db');
});

router.get('/:id', function(req, res, next) {
  // should get the user by id
  res.send('respond with a single user by id');
});

router.post('/', function(req, res, next) {
  // should create a new user in the database
  res.send('create a new user in the database');
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
