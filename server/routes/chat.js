const express = require('express');
const router = express.Router();

const Pusher = require('pusher');

const pusher = new Pusher({
    appId: "1442377",
    key: "4c57bf1d6a21bbd6ac1f",
    secret: "8b7507ba4fb1b111cdbd",
    cluster: "eu",
    useTLS: true
  });

router.post('/', (req, res) => {
    pusher.trigger('my-channel', 'my-event', {
        message: req.body.message
    });
    res.sendStatus(200);
});

module.exports = router;