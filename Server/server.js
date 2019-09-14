const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require("body-parser");
var cors = require('cors');

const passport = require("passport");
const users = require("./routes/api/users");
const books = require('./routes/api/books');

const app = express();


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use('/api/books', books);
app.use("/api/users", users);


const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));