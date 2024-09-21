const express = require('express')
const app = express()
const router = express.Router();

const clientErrorHandler = (err, req, res, next) => {
    console.error('inside error handler', req.body);

    const defaultName = "person: chris"

    res.status(201).send(defaultName);
  }

  module.exports = clientErrorHandler;