// webhook-server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const { requestId, status, products } = req.body;
    console.log('Webhook received');
    console.log('Request ID:', requestId);
    console.log('Status:', status);
    console.log('Products:', products);
    res.sendStatus(200);
});

app.listen(4000, () => {
    console.log('Webhook server started on port 4000');
});
