var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users.controller')
var todoCtrl = require('../controllers/todos.controller')
/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.route("/register").post(usersCtrl.UserController.register)
router.route("/login").post(usersCtrl.UserController.login)
router.route("/logout").post(usersCtrl.UserController.logout)
router.route("/updateTodos").put(todoCtrl.updataTodos)
router.route("/getTodos").put(todoCtrl.getTodos)
module.exports = router;
