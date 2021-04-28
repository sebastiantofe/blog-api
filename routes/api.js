const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')
const passport = require('passport');

router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

// Create a new article form
router.get('/articles/create', passport.authenticate('jwt', {session: false}), apiController.article_create_get);

//Create a new article POST
router.post('/articles', passport.authenticate('jwt', {session: false}), apiController.article_create_post);

// Get single article
router.get('/articles/:id', apiController.article_get);

// Get edit article form
router.get('/articles/:id/edit', passport.authenticate('jwt', {session: false}), apiController.article_edit_get);

// Edit article PUT
router.put('/articles/:id', passport.authenticate('jwt', {session: false}), apiController.article_edit_put);

// Delete article
router.delete('/articles/:id', passport.authenticate('jwt', {session: false}), apiController.article_delete);

// Get list of articles
router.get('/articles', apiController.articles_list_get);



module.exports = router;