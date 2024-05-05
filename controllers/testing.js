const express = require('express')
const app = express()
const router = express.Router();

router.get('/test', (req, res) => {
  res.send('this is a test')
});

router.get('/anothertest', (req, res) => {
  res.send('this is another different test');
});

module.exports = router;