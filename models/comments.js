var mongoose = require("mongoose"
)
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

var Comment = mongoose.model("Comment", commentSchema);
model.exports = Comment;
