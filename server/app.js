const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require('body-parser')
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

app.set('view engine', 'jade');


// app.use('/', indexRouter)
require('./routes')(app)
mongoose.connect(`mongodb://localhost:27017/citrine`, {
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
  app.listen(8081)
  console.log('app started at port 8081');
});

// var newDate = new Date();
// console.log(newDate)