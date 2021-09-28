'use strict'



const Database = use('Database')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TypeUserSeeder {
  async run () {
    await Database.table('type_users').insert(
      {
        name: 'Administrador'
      }
    ),
    await Database.table('type_users').insert(
      {
        name: 'Colaborador'
      }
    ),
    await Database.table('type_users').insert(
      {
        name: 'Cliente'
      }
    )
  }
}

module.exports = TypeUserSeeder
