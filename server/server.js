const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require("./models");
const routes = require('./routes/guest.routes');


db.sequelize.sync();

var corsOption = {
    origin: "http://localhost:4200"
};

//Set up application with CORS
app.use(cors(corsOption));
//Parse JSON requests
app.use(bodyParser.json());

app.use('/api', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', (req, res) => {
    res.send({express: 'YOUR EXPRESS BACKEND WORKS'});
});

module.exports = app;