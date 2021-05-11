'use strict'

/*
|--------------------------------------------------------------------------
| TurmasAlunoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const TurmaAluno = use('App/models/TurmaAluno')

class TurmasAlunoSeeder {
  async run() {
    await TurmaAluno.createMany([
      { turmas_id: 1, alunos_id: 2 },
      { turmas_id: 3, alunos_id: 2 },
      { turmas_id: 2, alunos_id: 3 }
    ])
  }
}

module.exports = TurmasAlunoSeeder
