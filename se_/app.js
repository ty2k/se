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




app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send(`
    <head>
        <title>Sharper Edges - DC Painting &amp; Dry Wall</title>
        <link rel="shortcut icon" href="https://res.cloudinary.com/rapha3l/image/upload/v1534098207/_2Sharper_Edges_joa2cg.png">
        <style type="text/css">
        body {
            background-image: url('https://res.cloudinary.com/rapha3l/image/upload/v1534176700/roller_paint_snqnud.jpg');
            background-size:cover;
            background-repeat: none;
            background-attachment: fixed;
            font-family: Arial, Helvetica, sans-serif;
        }
        #nav {
            position: fixed;
            border-bottom: 3px solid;
            border-bottom-color: #0b31a9;
            margin-left: 0;
        }
        li {
            display: inline-block;
            margin-left: 30px;
            margin-right: 15px;
            font-size: 22px;
            font-family: Arial, Helvetica, sans-serif;
            color:white;
            text-shadow: 1px 1px 2px lightblue;
    
        }
        #logo {
            width: 39%;
            margin: auto;
            margin-bottom: 30px;
            display: block;
        }
        #site {
            width: 39%;
            background-color: white;
            opacity: 0.95;
            float: right;
            padding: 34px;
            margin-right: 3%;
            margin-top: 9%;
            border-radius: 1%;
            border-style: solid;
            border-color: grey;
            border-width: 6px;
            
        }
        img {
            float: center;
        }
        h1 {
            text-align: center;
            letter-spacing: 1px;
        }
        h3{
            color: #0b31a9;
        }
        h5, #foot {
            color: #0b31a9;
            font-size: 12px;
            bottom: 3;
            float: right;
            position: fixed;
        }
        #site, #foot {
            display: inline;
        }
        fieldset {
            padding: 15px;
        }
        input {
            border-color: #0b31a9;
            margin: 15px;
        }
        button {
            background-color: grey;
            color: #0b31a9;
            padding: 12px;
            float: center;
            border-style: none;
            margin: auto;
            display: block;
        }
        
        </style>
    </head>
    <body>
        <!--NAV BAR-->
        
       <div id="nav">
           <ul>
               <li>Home</li>
               <li>Services</li>
               <li>Contact</li>
           </ul>
       </div>
          
        <!--CONTENT-->
       <div id="site">
           <img id="logo" src="https://res.cloudinary.com/rapha3l/image/upload/v1534094090/Sharper_Edges_w_afjyde.jpg">
           <br />
        <!--home/about-->
          <br />
          <br />
        <!--services-->
           <h1>SERVICES</h1>
           <div> <img src="home.png"> <span><h3> EXTERIOR PAINTING</h3></span>
            </div>
           <p>At vero eos et accusamus et iusto odio 
               dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
               atque corrupti quos dolores et quas molestias excepturi sint occaecati 
               cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia 
               animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita 
               distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit 
               quo minus id quod maxime.</p>
             
               <br />
           <div> <img src="wall-sconce (1).png"> <span><h3> INTERIOR PAINTING</h3></span>
            </div>
           <p>At vero eos et accusamus et iusto odio 
               dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
               atque corrupti quos dolores et quas molestias excepturi sint occaecati 
               cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia 
               animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita 
               distinctio. Nam libero tempore, cum.</p>
               <br />
               
           <div> <img src="ruler.png"> <span><h3> DRYWALL INSTALLATION &amp; REPAIR</h3></span>
            </div>
           <p>At vero eos et accusamus et iusto odio 
               dignissimos ducimus qui blanditiis praesentium voluptatum deleniti 
               atque corrupti quos dolores et quas molestias excepturi sint occaecati 
               cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia 
               animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita 
               distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit 
               quo minus id quod maxime .</p>
               <br />
               <br />
        <!--quote app-->
        <h1> CONTACT FOR A QUOTE</h1>
        <form action="/contact" id="quote-form" method="post" role="form">
            <fieldset>
                    <input type="text" id="fullname" name="name" placeholder="Full Name" style="width:38%; height:5%" required>
                    <input type="email" id ="your-email" name="email" placeholder="Email Address" style="width:38%; height:5%" required>
                    <input typ="text" name="description" placeholder="Description of services you are seeking" style="width:83%; height:20%;"required>
                       <button type="submit">Submit</button> 
           </fieldset>
        </form>
 
        </div>
        <div id="foot"> <h5>Designed by jdonric</h5> </div>
        
    `);
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


