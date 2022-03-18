const Router = require('express');
const router = new Router()
const userController = require('../controllers/userController');


router.get('/users', userController.getUsers)
router.post('/regist', userController.registration)


module.exports = router
