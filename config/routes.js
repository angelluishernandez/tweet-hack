const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller')
const tweetsController = require('../controllers/tweets.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const baseController = require('../controllers/base.controller');

router.get('/', authMiddleware.isAuthenticated, baseController.index)
router.get('/login', authMiddleware.isNotAuthenticated, usersController.login)
router.post('/login', authMiddleware.isNotAuthenticated, usersController.doLogin)
router.post('/logout', authMiddleware.isAuthenticated, usersController.logout)

router.get('/users/new', authMiddleware.isNotAuthenticated, usersController.new)
router.post('/users', authMiddleware.isNotAuthenticated, usersController.create)

router.get('/:username', authMiddleware.isAuthenticated, usersController.profile)



module.exports = router;