const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employee = new Schema({
    date:{type:String,default:new Date()},
    firstName:{type:String},
    lastName:{type:String},
    grade:{type:Number},
    status:{type:String,enum:["Active","Inactive"]}
});
const Employee = mongoose.model('employees',employee);
module.exports=Employee;