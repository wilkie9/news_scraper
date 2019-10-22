// Require mongoose library
var mongoose = require("mongoose");

// Get the schema constructor
var Schema = mongoose.Schema;

var headlineSchema = new Schema({
    headline: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    author: {
        type: String, 
        required: true
    },
    comment: [{
        type: Schema.Types.ObjectId,
        ref: "comment"
    }],

    var headline = mongoose.model("headline", headlineSchema);
    

    module.exports = Headline,


    
})