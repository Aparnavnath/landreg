let express = require('express');
// Setup server port
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Import CORS
let cors = require('cors');
let app = express();
// Import routes
let expressValidator=require('express-validator');
let expressSession=require('express-session');
let apiRoutes = require("./api-routes")
//Enalbe all CORS
app.use(cors());
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(expressValidator());
const dbRoute = "mongodb+srv://aparnaproject:apple@land-t3ywr.mongodb.net/land?retryWrites=true";
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
  );
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));
// Use Api routes in the App
app.use(expressSession({secret :'max', saveUninitialized: false, resave:false}));
app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running QBuilderDB on port " + port);
});
