const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.set('port', 4000);

 app.use(myconnection (mysql, {
 host: 'localhost',
 user: 'root',
 password:'josue',
 port: 3306,
 database:''
 }));


app.listen(app.get('port'), () => {
    console.log('Listening on port', app.get('port'));
});