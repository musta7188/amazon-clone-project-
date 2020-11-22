const functions = require('firebase-functions');

const express = require('express')
const cors = require("cors");
const { response } = require('express');

const stripe = require("stripe")
(
  "sk_test_BFUmB4YGEastZm4iGmlN4SHg00aFmVgsK4"
)

// API

//--App config
const app = express()
// -- MiddleWares
app.use(cors({origin: true}))
app.use(express.json());

// -- API routes
app.get('/', (request, response) => response.status(200).send("works"))

// - Listen Command

exports.api = functions.https.onRequest(app)