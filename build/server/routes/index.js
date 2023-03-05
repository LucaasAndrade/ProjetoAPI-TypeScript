"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const route = (0, express_1.Router)();
exports.route = route;
route.get('/', (req, resp) => {
    try {
        return resp.send('Olá, Dev!');
    }
    catch (err) {
        resp.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({
            erro: err.message
        });
    }
});
route.post('/teste', (req, resp) => {
    const { teste } = req.body;
    console.log(teste);
    resp.send('OK');
});
