'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Aluno extends Model {
    static getCampoAluno(){
        return ['nome', 'cpf', 'data_nascimento', 'matricula', 'email', 'telefone',
        'cep', 'logradouro', 'complemento', 'bairro','uf', 'municipio']
    }
    TumaAluno(){
        return this.belongsTo('App/models/TurmaAluno')
    }
}

module.exports = Aluno
