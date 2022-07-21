var express = require('express');
var router = express.Router();
const cloudinary = require('cloudinary');


require('dotenv').config();

const { Pool } = require('pg');
const pool = new Pool({
    host: process.env.DB_URL,
    port: 5432,
    user: 'yzlnssfd',
    password: process.env.DB_PASSWORD,
    database: 'yzlnssfd',
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

cloudinary.config({
    cloud_name: 'durevqv22',
    api_key: '861146978244326',
    api_secret: 'B5uJFxNANEXbrs8tU6YjYZuus3w'
})

router.post("/image-upload", (request, response) => {
    // collected image from a user
    const data = {
      image: request.body.image,
    }

    // upload image here
    cloudinary.uploader.upload(data.image)
    .then((result) => {
      response.status(200).send({
        message: "success",
        result,
      });
    }).catch((error) => {
      response.status(500).send({
        message: "failure",
        error,
      });
    });

});

router.get('/', function(req, res, next) {
    pool.query('SELECT * FROM sneakers ORDER BY id ASC', (error, results) => {
        if (error) {
            res.status(error.code).send(error.message);
        }
        res.status(200).json(results.rows)
    });
});

// should respond with a single sneaker by id
router.get('/:id', function(req, res, next) {
    res.send('respond with a single sneaker by id');
});

router.post('/', function(req, res, next) {
    pool.query('INSERT INTO sneakers (ownerid, title, size, color, wear, gender, description, box, imgurl, brand, originalprice, category) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 )', 
    [
        req.body.ownerid, 
        req.body.title, 
        req.body.size, 
        req.body.color,
        req.body.wear, 
        req.body.gender, 
        req.body.description, 
        req.body.box, 
        req.body.imgurl, 
        req.body.brand, 
        req.body.originalprice, 
        req.body.category
    ], (error, results) => {
        if (error) {
            res.status(error.code).send(error.message);
        }
        console.log(results.rows);
        console.log(results.fields);
        res.status(201).send(results.rows);
    });
});

// should update a sneaker by id
router.patch('/:id', function(req, res, next) {
  console.log('trying to update the sneaker', req.body.title)
    const id = req.params.id;
    console.log(id);
    const { title, size, color, wear, gender, description, box, brand, originalprice, category } = req.body
  
    try { 
    pool.query(
      'UPDATE sneakers SET title = $1, size = $2, color = $3, wear = $4, gender = $5, description = $6, box = $7, brand = $8, originalprice = $9, category = $10 WHERE id = $11',
      [title, size, color, wear, gender, description, box, brand, originalprice, category, id],
      (error, results) => {
        if (error) {
          console.log(error, 'shabang');
          // throw error
        }
        res.status(200).send({message: `User modified with ID: ${id}`})
      }
    )
  } catch (error) {
    console.log(error, "easily searchable");
  }
});

// should delete a sneaker by id
router.delete('/:id', function(req, res, next) {
    const id = req.params.id;
    console.log(id, 'does it get here?');
    pool.query('DELETE FROM sneakers WHERE id = $1', [id], (error, results) => {
        if (error) {
            res.status(error.code).send(error.message);
        }
        res.status(200).send({message: 'sneaker deleted'});
    }
    );
});

module.exports = router;
