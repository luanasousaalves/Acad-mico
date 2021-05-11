'use strict'

const Semestre = use('App/models/Semestre')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with semestres
 */
class SemestreController {
  /**
   * Show a list of all semestres.
   * GET semestres
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Semestre.all();
  }

  /**
   * Create/save a new semestre.
   * POST semestres
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Semestre.getCampoSemestre() //requisição de uma variável em outro arquivo
    const semestres = request.only(campos) //chamando a variável em outra linha
    return await Semestre.create(semestres)
  }

  /**
   * Display a single semestre.
   * GET semestres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Semestre.findOrFail(params.id);
  }

  /**
   * Update semestre details.
   * PUT or PATCH semestres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const semestre = await Semestre.findOrFail(params.id)

    const campos = Semestre.getCampoSemestre()
    const dados = request.only(campos)

    semestre.merge(dados) 
    await semestre.save() 
    return semestre
  }

  /**
   * Delete a semestre with id.
   * DELETE semestres/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const semestre = await Semestre.findOrFail(params.id)
    return await semestre.delete();
  }
}

module.exports = SemestreController
