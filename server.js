"use strict";
const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()
const allowCrossDomain = function(req, res, next) { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}
    // 
app.use(allowCrossDomain)

//here we are configuring dist to serve app files
app.use(express.static(path.join(__dirname, '../public')));

// this * route is to serve project on different page routes except root `/`
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)

