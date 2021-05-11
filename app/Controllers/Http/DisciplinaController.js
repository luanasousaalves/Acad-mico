'use strict'

const Aluno = require('../../Models/Aluno');

const Disciplina = use('App/models/Disciplina')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with disciplinas
 */
class DisciplinaController {
  /**
   * Show a list of all disciplinas.
   * GET disciplinas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Disciplina.all();
  }

  /**
   * Create/save a new disciplina.
   * POST disciplinas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Disciplina.getCampoDisciplina() //requisição de uma variável em outro arquivo
    const disciplinas = request.only(campos) //chamando a variável em outra linha
    return await Disciplina.create(disciplinas)
  }

  /**
   * Display a single disciplina.
   * GET disciplinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Disciplina.findOrFail(params.id);
  }

  /**
   * Update disciplina details.
   * PUT or PATCH disciplinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const disciplina = await Disciplina.findOrFail(params.id)

    const campos = Disciplina.getCampoDisciplina()
    const dados = request.only(campos)

    disciplina.merge(dados) 
    await disciplina.save() 
    return disciplina 
  }

  /**
   * Delete a disciplina with id.
   * DELETE disciplinas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const disciplina = await Disciplina.findOrFail(params.id)
    return await disciplina.delete();
  }
}

module.exports = DisciplinaController
