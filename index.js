const {
    getCurrencyRatesRequestOptions,
    getParsedCurrencyRatesResponse
} = require('./helpers/currency-rates.helper');
const {
    errorHandler
} = require('./helpers/error.helper');
const { routes } = require('./config');
const express = require('express');
const request = require("request");
const app = express();


app.get(routes.currencyRates, function (req, res) {
    request(getCurrencyRatesRequestOptions(), function (error, response, body) {
        if (!error) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(getParsedCurrencyRatesResponse(body)));
        } else {
            res.send(JSON.stringify(errorHandler(error)));
        }
    });
});

app.listen(3333, function () {
    console.log('Example app listening on port 3333!');
});