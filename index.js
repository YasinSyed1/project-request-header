// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
const bodyParser = require('body-parser');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

// {"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5",
// "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}


// app.use(function (req, res, next) {
//   console.log(`${req.method} ${req.path} - ${req.ip}`);
//   res.json({"ipaddress":req.ip,"language":"en-US,en;q=0.5",
//   "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"})
//   next();
// })
// app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/whoami", (req,res) => {
//   console.log(req.socket.remoteAddress);
//   console.log(req.ip);
  var lan = req.get("Accept-Language");
  var soft = req.get("User-Agent");
//   console.log(lan)
//   console.log(soft)
  res.json({"ipaddress":req.ip,"language":lan,"software": soft})
  
});



// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
