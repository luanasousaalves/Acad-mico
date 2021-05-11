'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TurmaAluno extends Model {
    static getCampoTurmaAluno(){
        return ['turmas_id', 'alunos_id']
    }
    aluno(){
        return this.belongsTo('App/models/Aluno')
    }
    turmas(){
        return this.belongsTo('App/models/Turma')
    }
}

module.exports = TurmaAluno
