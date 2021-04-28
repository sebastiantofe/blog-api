const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema= new Schema({
	author: { type: String, required: true},
	email: String,
	content: { type: String, required: true},
	comments: [ { type: Schema.Types.ObjectId, ref: 'Comment'} ],
	timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);