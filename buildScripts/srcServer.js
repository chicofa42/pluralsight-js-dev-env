//var express = require('express');
import express from 'express'; 
//var path = require('path');
import path from 'path';
//var open = require('open');
import open from 'open';
//var webpack = require('webpack');
import webpack from 'webpack';
//var config = require('../webpack.config.dev');
import config from '../webpack.config.dev';

//var port = 3000;
const port = 3000;
//var app = express();
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);

    } else {
        open('http://localhost:' + port);
    }
});

