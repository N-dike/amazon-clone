const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51K9NhuIr08UX884Yg5oQ5WoCZVz841SXMeAWclO1JJKtSqbndgk1q97J5db2WyTMCdb4hWyvnmVLI9TvyXK1XKbu00F2a8j1yE'
    );


// App config
const app = express();


// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (req, res) => res.status(200).send("hello world"));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total
    console.log("Payment request received for -> " + total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd" 
        })

// ok
res.status(201).send({
    clientSecret: paymentIntent.client_secret,
    })

})

// Listener
exports.api = functions.https.onRequest(app)

// endpoint
