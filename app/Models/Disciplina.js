'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Disciplina extends Model {
    static getCampoDisciplina(){
        return ['nome', 'horas', 'curso_id']
    }
    curso(){
        return this.belongsTo('App/models/Curso') //chama a método "belongsTo"
    }
}

module.exports = Disciplina
