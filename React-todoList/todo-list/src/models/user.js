export default class User {
    constructor({ name, email, password, todos = [] } = {}) {
        this.name = name
        this.email = email
        this.password = password
        this.todos = todos
    }
}