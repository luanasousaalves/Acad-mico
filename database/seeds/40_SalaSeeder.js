'use strict'

/*
|--------------------------------------------------------------------------
| SalaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Sala = use('App/models/Sala')

class SalaSeeder {
  async run () {
    await Sala.createMany([
      { nome: 'Sala A', capacidade:50, tipo:'Noturno/Vespertino/Matutino'},
      { nome: 'Sala B', capacidade:50, tipo:'Noturno/Vespertino/Matutino'},
      { nome: 'Sala C', capacidade:50, tipo:'Noturno/Vespertino/Matutino'},
      { nome: 'Sala D', capacidade:50, tipo:'Noturno/Vespertino/Matutino'},
      { nome: 'Sala E', capacidade:50, tipo:'Noturno/Vespertino/Matutino'},
      { nome: 'Sala F', capacidade:50, tipo:'Noturno/Vespertino/Matutino'}
    ])
  }
}

module.exports = SalaSeeder
