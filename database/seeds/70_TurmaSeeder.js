'use strict'

/*
|--------------------------------------------------------------------------
| TurmaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Turma = use('App/models/Turma')

class TurmaSeeder {
  async run() {
    await Turma.createMany([
      {
       codigo: '056',
       turno: 'Vespertino',
       professors_id: 1,
       disciplinas_id: 6,
       salas_id: 3,
       semestres_id: 6 },
    ])
  }
}
module.exports = TurmaSeeder
