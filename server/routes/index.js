/*Vivian Enwerem
301318591
5th June 2023*/

var express = require('express');
var router = express.Router();


let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact us page. */
router.get('/contact', indexController.displayContactPage);

// Get Route for displaying the login page
router.get('/login', indexController.displayLoginPage);

// Post Route for processing the login page
router.post('/login', indexController.processLoginPage);

// Get Route for displaying the register page
router.get('/register', indexController.displayRegisterPage);

// Post Route for processing the register page
router.post('/register', indexController.processRegisterPage);

// Get route for performing UserLogout
router.get('/logout', indexController.performLogout);



module.exports = router;
