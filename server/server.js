const express = require('express');
const cors = require('cors')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cookieParser());
app.use(cors({credentials:true, origin: "http://localhost:3000"}))
app.use(express.json(), express.urlencoded({ extended: true }));

require('./config/mongoose.config')
require('./routes/user.route')(app);
require('./routes/auth.route')(app);


app.listen(port, () => console.log(`Listening on port: ${port}`));
