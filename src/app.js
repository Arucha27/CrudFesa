const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
I
const app = express();
app.set('port', 4000);

app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'));
});