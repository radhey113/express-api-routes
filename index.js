'use strict';

/** Instance of express npm moduel **/
let Express = require('express');

/** Application instance for running server and routes  **/
let App = Express();

/** Body parse npm module to parse the request body **/
let BodyParser = require('body-parser');
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({extended: false}));	


/** Common and simple server routes **/

/********* This is the basic get request for root********
**********http://localhost:4001/getRequest(browser) **********/
App.get('/', (req, res) => res.send('Hello World!'));

/********* This is a get request example use it by******** 
**********http://localhost:4001/getRequest?name=radheyshyam(browser) **********/
App.get('/getRequest', (req, res) =>{

    /** Write business logic here  **/

    res.jsonp(req.query)
});


/********* This is a post request example use it by********
**********postman http://localhost:4001/postRequest*********** 
************(Postman and give body data)*************/
App.post('/postRequest', (req, res) => {

    /** Write business logic here  **/
    
    res.jsonp(req.body); 
});


/********* This is a put request example use it by********
**********postman http://localhost:4001/putRequest **********
************(Postman and give body data)*************/
App.put('/putRequest', (req, res) => {
    
    /** Write business logic here  **/
    
    res.jsonp(req.body);
});


/********* This is a delete request example use it by********
**********postman http://localhost:4001/deleteRequest **********
************(Postman and give body data)*************/
App.delete('/deleteRequest', (req, res) => {
    
    /** Write business logic here  **/
    
    res.jsonp(req.body);
});


/** Server is running here **/
/****
   To Understand More Follow Below Link:
 https://expressjs.com/en/starter/hello-world.html
*****/
App.listen(4001, () => {
     console.log(`Server is running on ${4001}`);
});

