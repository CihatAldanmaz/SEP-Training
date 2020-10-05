let users
let sessions

class UsersDAO {
  static async injectDB(conn) {
    if (users && sessions) {
      return
    }
    try {
      users = await conn.db(process.env.MFLIX_NS).collection("users")
      sessions = await conn.db(process.env.MFLIX_NS).collection("sessions")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }
  static async getUser(email) {

    return await users.findOne({ email: email })
  }

  static async addUser(userInfo) {
    try {
      await users.insertOne(
        { "name": userInfo.name, "email": userInfo.email, "password": userInfo.password, "todos":userInfo.todos},
        { w : "majority", wtimeout : 100 }
      )
      return { success: true }
    } catch (e) {
      if (String(e).startsWith("MongoError: E11000 duplicate key error")) {
        return { error: "A user with the given email already exists." }
      }
      console.error(`Error occurred while adding new user, ${e}.`)
      return { error: e }
    }
  }
  static async getTodos(user) {
    try {
      const response = await users.findOne(
        {"email":user.email},
        {$project: {"todos":1}}
      )
      return response
    } catch (e) {
      console.log(`Unable to get todos: ${e}`)
      return { error: e }
    }
  }
  static async updateTodos(user, todos) {
    try {
      const updateResponse = await users.updateOne(
        {"email":user.email},
        {$set: {"todos":todos}}
      )
      return updateResponse
    } catch (e) {
      console.log(`Unable to update todo: ${e}`)
      return { error: e }
    }
  }
  
  static async loginUser(email, jwt) {
    try {
      await sessions.updateOne(
        { email: email },
        { $set: { jwt: jwt } },
      )
      return { success: true }
    } catch (e) {
      console.error(`Error occurred while logging in user, ${e}`)
      return { error: e }
    }
  }

  static async logoutUser(email) {
    try {
      // TODO Ticket: User Management
      // Delete the document in the `sessions` collection matching the email.
      await sessions.deleteOne({ email: email })
      return { success: true }
    } catch (e) {
      console.error(`Error occurred while logging out user, ${e}`)
      return { error: e }
    }
  }

  static async getUserSession(email) {
    console.log(email);
    try {
      // TODO Ticket: User Management
      // Retrieve the session document corresponding with the user's email.
      return sessions.findOne({ email: email })
    } catch (e) {
      console.error(`Error occurred while retrieving user session, ${e}`)
      return null
    }
  }

  static async deleteUser(email) {
    try {
      await users.deleteOne({ email })
      await sessions.deleteOne({ user_id: email })
      if (!(await this.getUser(email)) && !(await this.getUserSession(email))) {
        return { success: true }
      } else {
        console.error(`Deletion unsuccessful`)
        return { error: `Deletion unsuccessful` }
      }
    } catch (e) {
      console.error(`Error occurred while deleting user, ${e}`)
      return { error: e }
    }
  }
}

module.exports = UsersDAO