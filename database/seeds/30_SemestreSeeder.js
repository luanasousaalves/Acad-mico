'use strict'

/*
|--------------------------------------------------------------------------
| SemestreSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Semestre = use('App/models/Semestre')

class SemestreSeeder {
  async run () {
    await Semestre.createMany([
      { nome: 'Primeiro Semestre', data_inicio: '24/12/2000', data_fim: '24/12/2005'},
      { nome: 'Segundo Semestre', data_inicio: '26/07/2021', data_fim: '26/07/2024'},
      { nome: 'Terceiro Semestre', data_inicio: '25/01/2013', data_fim: '25/01/2017'},
      { nome: 'Quarto Semestre', data_inicio: '24/02/2014', data_fim:'24/02/2022'},
      { nome: 'Quinto Semestre', data_inicio: '23/04/2015', data_fim: '23/04/2018' },
      { nome: 'sexto Semestre', data_inicio: '26/09/2005', data_fim: '26/09/2010'}
    ])
  }
}
  

module.exports = SemestreSeeder
