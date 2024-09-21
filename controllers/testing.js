const express = require('express')
const app = express()
const router = express.Router();

router.get('/test', (req, res) => {
  //console.log('body', req.body.test);
  if(req.body.test == null){
    throw new Error('no test field present');
  } else{
  res.status(201).send(req.body);
  }
});

router.get('/anothertest', (req, res, next) => {
  try{
    console.log('request', req.body);
    if(checkNamePresent(req.body.name)){
      const concatToName = "person: " + req.body.name;
      res.status(201).send(concatToName);
    } else{
    throw new Error('name not included in request')
    }
  } catch(err){
    console.error('error in GET request to /anothertest')
    next(err);
  }
});

const checkNamePresent = (name) => {
  let present = false;

  return name != null;
}

module.exports = router;