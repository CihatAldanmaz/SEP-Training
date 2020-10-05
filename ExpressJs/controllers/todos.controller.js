var UsersDAO = require("../dao/usersDAO")
var { User } = require("./users.controller")

class TodosController {
    static async getTodos(req,res) {
        try {
          const userJwt = req.get("Authorization").slice("Bearer ".length)
          const user = await User.decoded(userJwt)
          var { error } = user
          if (error) {
            res.status(401).json({ error })
            return
          }
          console.log(user)
          const todos = await UsersDAO.getTodos(user)
          res.json({ status: "success", todos: todos })
        } catch (e) {
          res.status(500).json({ e })
        }
      }
    static async updataTodos(req,res) {
      try {
        console.log(req.get("Authorization"))
        const userJwt = req.get("Authorization").slice("Bearer ".length)
        const user = await User.decoded(userJwt)
        var { error } = user
        if (error) {
          res.status(401).json({ error })
          return
        }
        const todos = req.body.todos
        const updatedTodos = await UsersDAO.updateTodos(user,todos)
        res.json({ status: "success", todos: updatedTodos })
      } catch (e) {
        res.status(500).json({ e })
      }
    }
}

module.exports = TodosController;