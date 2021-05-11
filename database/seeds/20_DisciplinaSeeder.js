'use strict'

/*
|--------------------------------------------------------------------------
| DisciplinaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Disciplina = use('App/models/Disciplina')

class DisciplinaSeeder {
  async run () {
    await Disciplina.createMany([
      { nome: 'front-end', horas:5, curso_id: 1},
      { nome: 'Direito', horas:5, curso_id: 2},
      { nome: 'Engenharia', horas:4, curso_id: 3},
      { nome: 'Medicina', horas:8, curso_id: 4},
      { nome: 'Enfermagem', horas:3, curso_id: 5},
      { nome: 'Psicologia', horas:5, curso_id: 6},
    ])
  }
}

module.exports = DisciplinaSeeder
