/*
*
*   Submit Page Js
*   Filename: submit.js
*
*
*/


const express = require('express');
/*  

    Express is a huge library used for many things
    In this file Express is used to create routes and 
    handle http requests.

*/
const path = require('path');
//Require path to find the diretory name

const submit_router = express.Router();
//Create a router to route the traffic
const submit_app = express();
//Setup a variable for express
var shell = require('shelljs'); /* Shell used to run Python programs through Node.js */


//Include Authentication
const { ensureAuthenticated } = require('../routes/auth');

/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
submit_app.set('view engine', 'pug');
submit_app.use(express.static(path.join(__dirname, 'views')));

/*

    SUBMIT WAIT FUNCTION

*/

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }


/*

    SUBMIT BASIC GET REQUEST

    FUNCTION: Grabs the webpage houme. Can display information
    from the database.

    Description: It does this by grabbing the houme file.
    It replaces any variables in the pug file with data from
    the database.

*/


submit_router.get('/', ensureAuthenticated, function(req, res) {
    
    res.render('submit');
});

/*

    HOUME BASIC POST REQUEST

    FUNCTION: Grabs any submitted data from the user.
    It can pull information from textboxes submitted by the
    user.

    Description: It does this by using the body parser and
    pulling the data from the textbox name. It then passes it
    into the node js file and can be used about freely.

*/

submit_router.post('/houme', ensureAuthenticated, function(req, res){
    res.render('loading');
});




module.exports = submit_router;