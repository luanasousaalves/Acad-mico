'use strict'

const Turma = use('App/models/Turma')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with turmas
 */
class TurmaController {
  /**
   * Show a list of all turmas.
   * GET turmas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Turma.request.all();
  }

  /**
   * Create/save a new turma.
   * POST turmas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Turma.getCampoTurma() //requisição de uma variável em outro arquivo
    const turmas = request.only(campos) //chamando a variável em outra linha
    return await Turma.create(turmas)
  }

  /**
   * Display a single turma.
   * GET turmas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Turma.findOrFail(params.id);
  }

  /**
   * Update turma details.
   * PUT or PATCH turmas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const turma = await Turma.findOrFail(params.id)

    const campos = Turma.getCampoTurma()
    const dados = request.only(campos)

    turma.merge(dados)
    await turma.save()
    return turma
   
  }

  /**
   * Delete a turma with id.
   * DELETE turmas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const turma = await Turma.findOrFail(params.id)
    return await turma.delete();
  }
}

module.exports = TurmaController
