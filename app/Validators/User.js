'use strict'

class User {
  get rules () {
    return {
      name: 'required',
      username: 'required',
      email: 'required',
      password: 'required',
      type_user_id: 'required',
    }
  }

  get messages() {
    return {
      'name.required': 'informe a propriedade name',
      'username.required': 'informe a propriedade username',
      'email.required': 'informe a propriedade email',
      'password.required': 'informe a propriedade password',
      'type_user_id.required': 'informe a propriedade type_user_id'
    }
  }
   
}

module.exports = User
