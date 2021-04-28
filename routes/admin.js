
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')

router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/login', adminController.login_get);

router.post('/login', adminController.login_post);

/* router.get('/articles/:id', apiController.article_get);

router.get('/articles/:id/edit', apiController.article_edit_get);

router.put('/articles/:id', apiController.article_edit_put);

router.delete('/articles/:id', apiController.article_delete);

router.get('/articles', apiController.articles_list_get);
 */


module.exports = router;