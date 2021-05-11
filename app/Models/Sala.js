'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Sala extends Model {
    static getCampoSala(){
        return ['nome', 'capacidade', 'tipo']
    }
    turma(){
        return this.belongsTo('App/models/turma')
    }
}

module.exports = Sala
