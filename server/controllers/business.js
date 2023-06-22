let express = require('express');
let router = express.Router();
let mongoose = require ('mongoose');

//connect to businessContact model
let Business = require('../models/businessContact');

//Get route for the business list page - Read operation
module.exports.displayBusinessList = async (req, res, next) => {

   try{
    let businessList = await Business.find();
    //console.log(businessList)
    res.render('business/businesslist',{title:'Business', businessList:businessList,
    displayName: req.user ? req.user.displayName : ''})
   }catch(err){
    console.error(err);
   }
  };

  // Get Route for displaying the Add page- Create operation
  module.exports.displayAddPage = async (req, res, next) =>{
   try{
    res.render('business/add',{title:'Add List', displayName: req.user ? req.user.displayName : ''})
   }catch(err){
    console.error(err);
   }
  };

 

  //post Route for processing the Add page - Create operation
  module.exports.processAddPage = async (req, res, next) =>{
      let newList= new Business(
      {
         "Contact_Name": req.body.Contact_Name,
         "Contact_Email":req.body.Contact_Email,
         "Phone_Number":req.body.Contact_Phone_Number
      });
      try{
         await newList.save();
         res.redirect('/business_contacts');
      }
      catch(err){
         console.log(err);
         res.status(500).send(err);
      }
  };

  //Get Route for displaying the Edit page - Update operation
  module.exports.displayEditPage = async (req, res, next) =>{
   let id = req.params.id;

   try{
         let businessEdit = await Business.findById(id);
         res.render('business/edit',{title:'Edit Conatct', business:businessEdit,displayName: req.user ? req.user.displayName : ''})
   }
   catch(err){
      console.log(err);
      res.status(500).send(err);
   }
  };

  //Post Route for processing the Edit page - Update operation
  module.exports.processEditPage = async (req, res, next) =>{
   let id = req.params.id;
   let updatedList=
   {
    "Contact_Name": req.body.Contact_Name,
    "Contact_Email":req.body.Contact_Email,
    "Phone_Number":req.body.Contact_Phone_Number
   }
   try{
      await Business.updateOne({_id: id}, updatedList);
      res.redirect('/business_contact');
   }
   catch(err){
   console.log(err);
   res.status(500).send(err);
   }
  
  };

  //Get to perform Deletion - Delete operation
  module.exports.performDelete = async (req, res, next) =>{

   let id = req.params.id;
   try{
      await Business.findByIdAndRemove(id);
      res.redirect('/business_contact');
   }catch(err){
   console.log(err);
   res.status(500).send(err);
   }
  };
