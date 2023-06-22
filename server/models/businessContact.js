let mongoose = require('mongoose');

//create a model class
let businessModel = mongoose.Schema(
{
   Contact_Name: String,
   Contact_Email:String,
   Phone_Number:String
},
{
    collection:'businessContact'
}
);
module.exports = mongoose.model('Business', businessModel);