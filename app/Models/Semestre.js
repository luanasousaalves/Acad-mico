'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Semestre extends Model {
    static getCampoSemestre(){
        return ['nome', 'data_inicio', 'data_fim']
    }
    turma(){
        return this.hasMany('App/models/turma')
    }
}

module.exports = Semestre
