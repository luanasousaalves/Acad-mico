'use strict'

const Professor = use('App/models/Professor')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with professors
 */
class ProfessorController {
  /**
   * Show a list of all professors.
   * GET professors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Professor.all();
  }

  /**
   * Create/save a new professor.
   * POST professors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Professor.getCampoProfessor() //requisição de uma variável em outro arquivo
    const Professores = request.only(campos) //chamando a variável em outra linha
    return await Professor.create(Professores)
  }

  /**
   * Display a single professor.
   * GET professors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Professor.findOrFail(params.id);
  }

  /**
   * Update professor details.
   * PUT or PATCH professors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const professor = await Professor.findOrFail(params.id)

    const campos = Professor.getCampoProfessor()
    const dados = request.only(campos)

    professor.merge(dados) 
    await professor.save() 
    return professor 
  }

  /**
   * Delete a professor with id.
   * DELETE professors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const professor = await Professor.findOrFail(params.id)
    return await professor.delete();
  }
}

module.exports = ProfessorController
