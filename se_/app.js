'use strict'


require('dotenv').config();
var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

var app = express();

var ENV = process.env.NODE_ENV || 'development';
var GM_USER = process.env.GM_USER;
var GM_PASS = process.env.GM_PASS;
var GM_HOST = process.env.GM_HOST;

// After `npm i ejs`, set ejs as the rendering/templating engine like this:
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    // Now, instead of having the whole HTML page in-line, just use `res.render`
    // and pass the string `'index'` as the argument; ejs knows to look in the
    // views directory and it knows to look for a .ejs file with the file name
    // equal to the string you pass it.
    res.render('index');
});

app.post('/contact', function (req, res) {
    var message, smtpTrans;
    smtpTrans = nodemailer.createTransport({
       host: 'smtp.gmail.com',
       port: 465,
       secure: true,
    auth: {
        user: GM_USER,
        pass: GM_PASS
      }
    });

message = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: GM_USER,
    subject:'QUOTE REQUEST - Sharper Edges DC',
    text: req.body.description
};

smtpTrans.sendMail(message, function (error, response) {
    if (error) {
      res.render('Quote request FAILED');
    }
    else {
      res.render('Quote request SUCCESSFUL');
    }
  });
});

app.listen(3000, function (req, res) {
    console.log('TUNED INTO PORT 3000');
});


