const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.listen(3001, ()=> {
    console.log("server listening at port: 3001");
})