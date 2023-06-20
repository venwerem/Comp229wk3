let express = require('express');
let router = express.Router();
let mongoose = require ('mongoose');

//connect to game model
let Game = require('../modules/game');

//Get route for the game list page
router.get('/', async(req, res, next)=>{

   try{
    let gameList= await Game.find();
    //console.log(gameList)
    res.render('game',{title:'Game List', GameList: gameList})
   }catch(err){
    console.error(err);
   }
  });
  module.exports = router;