const { body, validationResult } = require('express-validator');
const async = require('async');
const Group = require('../models/group');
const User = require('../models/user');
const Post = require('../models/post');


exports.article_create_get = function(req, res, next) {
	res.json({
		message: 'New article form get'
	});
};

exports.article_create_post = function(req, res, next) {
	res.json({
		message: 'New article post route'
	});
};

exports.article_get = function(req, res, next) {
	res.json({
		message: 'Specific article'
	});
};

exports.article_edit_get = function(req, res, next) {
	res.json({
		message: 'Edit specific article GET'
	});
};

exports.article_edit_put = function(req, res, next) {
	res.json({
		message: 'Edit specific article PUT'
	});
};

exports.article_delete = function(req, res, next) {
	res.json({
		message: 'Delete article'
	});
};

exports.articles_list_get = function(req, res, next) {
	res.json({
		message: 'List of articles'
	});
};