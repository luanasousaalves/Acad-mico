'use strict'

/*
|--------------------------------------------------------------------------
| AlunoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Aluno = use('App/models/Aluno')

class AlunoSeeder {
  async run () {
    await Aluno.createMany([
      { nome: 'Luana',
      cpf: '452.654.325',
      data_nascimento: '24/12/2000',
       matricula: '20114290055',
       email: 'luanaalves4512@gmail.com',
       telefone: '3333-3333',
       cep: '72245654',
       logradouro: 'qnp 14 conj z',
       complemento: 'casa 30',
       bairro: 'P.sul',
       uf: 'DF',
       municipio: 'DF'}
    ])
  }
}

module.exports = AlunoSeeder
