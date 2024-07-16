// /funnel-test/server.js

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/fire-pixel', (req, res) => {
    const { event, value } = req.query;
    console.log(`Meta Pixel Event: ${event}, Value: ${value}`);
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/upsell', (req, res) => {
    const purchaseAmount = req.query.amount || 0;
    res.render('upsell', { purchaseAmount });
});

app.get('/thankyou', (req, res) => {
    const upsellAmount = req.query.upsell || 0;
    const purchaseAmount = req.query.purchase || 0;
    res.render('thankyou', { purchaseAmount, upsellAmount });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
