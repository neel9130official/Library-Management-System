const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    name: {
        type:String,
        required:true},
    email:{
        type:String,
        required:true},
    issuedBook:{
        type:Number,
        required:false,
        ref:'Book'},
    issuedDate:{
        type:String,
    required:false},
    returnDate:{
        type:String,
    required:false},
    subscriptionType:{
        type:String,
    required:true},
    subscriptionDate:{
        type:String,
    required:true},
},
{timestamps:true})

module.exports = mongoose.models.User || mongoose.model('User', userSchema);