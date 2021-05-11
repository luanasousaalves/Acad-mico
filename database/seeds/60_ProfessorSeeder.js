'use strict'

/*
|--------------------------------------------------------------------------
| ProfessorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Professor = use('App/models/Professor')

class ProfessorSeeder {
  async run () {
    await Professor.createMany([
      {nome:'Orion', 
      cpf:'054.478.365.60', 
      matricula:'201142548', 
      salario:'30.000', 
      email:'O.mesquita254878@gmail.com', 
      telefone:'945612578'}
    ])
  }
}

module.exports = ProfessorSeeder
