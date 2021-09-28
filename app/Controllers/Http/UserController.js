'use strict'

class UserController {
    async store() {
        return { result : 'isso foi um test' }
    }
    //comment for test
    async show() {
        return { result : 'buscou o usuário 1' }
    }

    async update() {
        return { result: 'atualizando o usuário 1' }
    }
}

module.exports = UserController
