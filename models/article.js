const mongoose = require('mongoose');
const { Schema } = mongoose;
const { format } = require('date-fns');
const Comment = require('./comment');

const articleSchema= new Schema({
	author: { type: Schema.Types.ObjectId, ref: 'User', required: true, autopopulate: true},
	title: { type: String, required: true},
	published: { type: Boolean, required: true},
	content: { type: String, required: true},
	comments: [{ type: Schema.Types.ObjectId, ref: 'Comment', autopopulate: true }],
	timestamp: { type: Date, default: Date.now},
});

//virtual for article's formatted time
articleSchema
.virtual('formatted_time')
.get(function() {
	return format( new Date(this.timestamp), "dd MMMM yyyy ' at ' HH:mm" )
});

//virtual for article's URL
articleSchema
.virtual('url')
.get(function() {
	return '/articles/' + this._id
});

articleSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Post', postSchema)