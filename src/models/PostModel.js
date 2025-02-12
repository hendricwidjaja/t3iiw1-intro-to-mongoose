const mongoose = require("mongoose");

// Make a schema
// const titleSchema = new mongoose.Schema({
//     type: String,
//     required: true,
//     minLength: 10
// });
// const simpleSchema = new mongoose.Schema(objDefiningDataRules, SchemaOptions);
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 10,
        unique: true
    },
    content: String,
    date: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true
    }
});

// Make a model based on the schema (blueprint for documents in a collection)
const PostModel = mongoose.model("Post", PostSchema);
// Mongoose automatically looks for a collection with the plural lowercase name 'posts'

// Export the model for accessibility in other parts of the code
module.exports = {
    PostModel
}