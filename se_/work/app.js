'use strict'


require('dotenv').config();
var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

var app = express();

var ENV = process.env.NODE_ENV || 'development';
var SE_USER = process.env.SE_USER;
var SE_PW = process.env.SE_PW;
var SE_HOST = process.env.SE_HOST;




app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.send(`
    <html>
    <head>
        <title>Sharper Edges - DC Painting &amp; Dry Wall</title>
        <link href="https://fonts.googleapis.com/css?family=Hind" rel="stylesheet">
        <link rel="shortcut icon" href="https://res.cloudinary.com/rapha3l/image/upload/v1534098207/_2Sharper_Edges_joa2cg.png">

        <style type="text/css">
        body {
            background-image: url('https://res.cloudinary.com/rapha3l/image/upload/v1534379697/print-1822374_1920_bvw5v3.jpg');
            background-size:cover;
            background-repeat: none;
            background-attachment: fixed;
            font-family: Hind, sans-serif;
        }
        #nav {
            
            border-bottom: 3px solid;
            border-bottom-color: #0b31a9;
            margin-left: 0;
        }
        li {
            display: inline-block;
            margin-left: 30px;
            margin-right: 15px;
            font-size: 22px;
            font-family: Hind, sans-serif;
            color:grey;
            
    
        }
        #logo {
            width: 39%;
            margin: auto;
            margin-bottom: 30px;
            display: block;
        }
        #site {
            width: 50%;
            background-color:whitesmoke;
            opacity: 0.99;
                float: left;
               margin-left:25%;
            
            padding: 34px;
                
            margin-top: 9%;
            margin-bottom: 9%;
            border-style: none;
            
            
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
           position: absolute;
            
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
        /*SLIDESHOW*/
        .aSlide {
            display: none;
            width: 75%;
            height: auto;
            margin: auto;
        }
        .arrow-button {
            display: inline-block;
            margin: 2px;
        }
        #arrow-button1 {
            margin-left: 15%;
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
           <img id="logo" src="https://res.cloudinary.com/rapha3l/image/upload/v1534381060/sharper_edges_815_gray_qo9nqs.png">
           <br />

        <!--home/about-->
        <div class="image-container">
            <img class="aSlide" src="https://res.cloudinary.com/rapha3l/image/upload/v1534253402/interior_azvovj.jpg">
            <img class="aSlide" src="https://res.cloudinary.com/rapha3l/image/upload/v1534253402/minimalist_vs3xxt.jpg">
            <img class="aSlide" src="https://res.cloudinary.com/rapha3l/image/upload/v1534253553/brown_dnhtkr.jpg">
            <img class="aSlide" src="https://res.cloudinary.com/rapha3l/image/upload/v1534253400/bench_py0fgu.jpg">
            <img class="aSlide" src="https://res.cloudinary.com/rapha3l/image/upload/v1534253404/window_qie29t.jpg">

            <button class="arrow-button" id="arrow-button1" onclick="clickArrow(-1)">&#10094;</button>
            <button class="arrow-button" id="arrow-button2" onclick="clickArrow(1)" >&#10095;</button>
            

        </div>

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
                    <input type="text" id="fullname" name="fName" placeholder="Full Name" style="width:38%; height:5%" required>
                    <input type="email" id ="your-email" name="yEmail" placeholder="Email Address" style="width:38%; height:5%" required>
                    <input typ="text" name="description" placeholder="Description of services you are seeking" style="width:83%; height:20%;"required>
                       <button type="submit">Submit</button> 
           </fieldset>
        </form>
 
        </div>

        <div id="foot"> <h5>Designed by jdonric</h5> </div>
        

        <script>
            //slideshow
            var slideStart = 1;
            var left = document.getElementById("arrow-button1");
            var right = document.getElementById("arrow-button2");
            showImg(slideStart);
            function clickArrow(n) {
                showImg(slideStart += n);
            }
            function showImg(n) {
                var i;
                var x = document.getElementsByClassName("aSlide");
           
                if(n > x.length) {
                    slideStart = 1;
                }
                if (n < 1) {
                    slideStart = x.length;
                }
                for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";
                }
                x[slideStart-1].style.display = "block";
            
            }
            //modal
         
            
            
        </script>

    </body>

</html>
        
    `);
});

app.post('/contact', function (req, res) {
    var message, smtpTrans;
    smtpTrans = nodemailer.createTransport({
       host: 'smtp.gmail.com',
       port: 465,
       secure: true,
    auth: {
        user: SE_USER,
        pass: SE_PW
      }
    });

message = {
    from: req.body.fullname + ' &lt;' + req.body.yEmail + '&gt;',
    to: SE_USER,
    subject:'QUOTE REQUEST - Sharper Edges DC',
    text: req.body.description
},

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