'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Professor extends Model {
    static getCampoProfessor(){
        return ['nome', 'cpf', 'matricula', 'salario', 'email', 'telefone']
    }
    turma(){
        return this.hasMany('App/models/Turma') //hasMany tem varios 
    }
}

module.exports = Professor
