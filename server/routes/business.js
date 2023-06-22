let express = require('express');
let router = express.Router();
let mongoose = require ('mongoose');

//connect to businessContact model
let Business = require('../models/businessContact');

let businessController = require ('../controllers/business')

function requireAuth(req, res, next)
{
    //check is the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// Get Route for the Business List page - READ Operation
router.get('/', businessController.displayBusinessList);

// Get Route for displaying the Add page - CREATE Operation
router.get('/add', requireAuth, businessController.displayAddPage);

// Post Route for processing the Add Page - CREATE Operation
router.post('/add', requireAuth, businessController.processAddPage);

// Get Route for displaying the Edit Page - UPDATE Operation
router.get('/edit/:id', requireAuth, businessController.displayEditPage);

// Post Route for processing the Edit Page - UPDATE Operation
router.post('/edit/:id', requireAuth, businessController.processEditPage);

// Get to perform Deletion - DElETE Operation
router.get('/delete/:id', requireAuth, businessController.performDelete);

  module.exports = router;