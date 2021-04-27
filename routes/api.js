
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')

router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/articles/create', apiController.article_create_get);

router.post('/articles', apiController.article_create_post);

router.get('/articles/:id', apiController.article_get);

router.get('/articles/:id/edit', apiController.article_edit_get);

router.put('/articles/:id', apiController.article_edit_put);

router.delete('/articles/:id', apiController.article_delete);

router.get('/articles', apiController.article_list_get);



module.exports = router;