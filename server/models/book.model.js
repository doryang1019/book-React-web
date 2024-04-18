const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },
    pages: {type: Number}
}, { versionKey: false });

const bookModel = model('300368638-yisin', bookSchema);

module.exports = bookModel;
