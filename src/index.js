// import fetch from 'node-fetch';
// import jwt_decode from "jwt-decode";
// const fetch = require("node-fetch");
const jwt_decode = require('jwt-decode');
const express = require("express");

// const response = await fetch('https://dgcg.covidbevis.se/tp/trust-list');
// const body = await response.text();
// console.log(body);
// var token = body;
// var decoded = jwt_decode(token);

// console.log(decoded);


const v1Router = require("./v1/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/dscs", v1Router);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});