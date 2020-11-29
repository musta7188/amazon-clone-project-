const functions = require('firebase-functions');

const express = require('express')
const cors = require("cors");
const { response } = require('express');

const stripe = require("stripe")(
  "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"
)

// API

//--App config
const app = express()
// -- MiddleWares
app.use(cors({origin: true}))
app.use(express.json());

// -- API routes
app.get('/', (request, response) => response.status(200).send("works"))

app.post('/payments/create', async (request, response) =>{
    const total = request.query.total;
    console.log('Payment Request Received ', total)

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, ///subunits of the currency
      currency: "usd",
    })

    response.status(201).send({
      clientSecret: paymentIntent.client_secret
    })
})



// - Listen Command

exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-project-54181/us-central1/api