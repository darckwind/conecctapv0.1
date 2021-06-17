const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const connectionDB = require('./config/db');
const passport = require('passport');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

connectionDB()

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(routes);
app.use(passport.initialize())
require('./config/passport')(passport)

const PORT = process.env.PORT || 3050

app.listen(PORT, console.log(`server runing in port ${PORT}`))