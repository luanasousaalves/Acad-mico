'use strict'

/*
|--------------------------------------------------------------------------
| CursoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Curso = use('App/models/Curso')

class CursoSeeder {
  async run () {
    await Curso.createMany([
      { nome: 'Análise e desenvolvimento de sistemas', duracao:5},
      { nome: 'Direito', duracao:5},
      { nome: 'Engenharia', duracao:4},
      { nome: 'Medicina', duracao:8},
      { nome: 'Enfermagem', duracao:3},
      { nome: 'Psicologia', duracao:5}
    ])
  }
}

module.exports = CursoSeeder
