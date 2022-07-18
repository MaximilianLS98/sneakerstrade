var express = require('express');
var router = express.Router();

// should respond with all the sneakers in the database
router.get('/', function(req, res, next) {
  res.send('respond with all sneakers in db');
});

// should respond with a single sneaker by id
router.get('/:id', function(req, res, next) {
    res.send('respond with a single sneaker by id');
});

// should create a new sneaker in the database
router.post('/', function(req, res, next) {
    res.send('create a new sneaker in the database');
});

// should update a sneaker by id
router.put('/:id', function(req, res, next) {
    res.send('update a sneaker by id');
});

// should delete a sneaker by id
router.delete('/:id', function(req, res, next) {
    res.send('delete a sneaker by id');
});

module.exports = router;
