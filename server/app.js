const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const config = require('./config')
const bodyParser = require('body-parser')
const path = require('path');
// const authRouter = require('./routes/auth')

const app = express();

// for parsing application/json
app.use(cors())
app.use(bodyParser.json())

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true }));

// Get the Javascript in the browser
app.use("/images", express.static("./utils/images"));
app.use("/styles", express.static("./utils/css"));
app.use(express.static(path.join(__dirname, '../../client/dist')))

app.set('view engine', 'jade');


// app.use('/', indexRouter)
require('./routes')(app)

// Handle production
if (process.env.NODE_ENV === 'production') {
  // static folder
  app.use(express.static(__dirname + '/public/'));

  // handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
  
}
mongoose.connect('mongodb+srv://shivam:shivam@cluster0.4epaz.mongodb.net/Ecommerce?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
 },
 function (err, res) {
  if (err) {
   console.log ('ERROR connecting to MongoDB : ' + err);
  }
  else {
  console.log ('Connected to: MongoDB');
  }
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
  // we're connected!
  app.listen(config.port)
  console.log(`app started at port ${config.port}`);
  console.log(`app connected to ${config.mongo.uri}`)
});

// var newDate = new Date();
// console.log(newDate)