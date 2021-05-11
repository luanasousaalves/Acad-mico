'use strict'

const Sala = use('App/models/Sala')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with salas
 */
class SalaController {
  /**
   * Show a list of all salas.
   * GET salas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Sala.all();
  }

  /**
   * Create/save a new sala.
   * POST salas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Sala.getCampoSala() //requisição de uma variável em outro arquivo
    const salas = request.only(campos) //chamando a variável em outra linha
    return await Sala.create(Salas)
  }

  /**
   * Display a single sala.
   * GET salas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Sala.findOrFail(params.id);
  }

  /**
   * Update sala details.
   * PUT or PATCH salas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const sala = await Sala.findOrFail(params.id)

    const campos = Sala.getCampoSala()
    const dados = request.only(campos)

    sala.merge(dados) 
    await sala.save() 
    return sala 
  }

  /**
   * Delete a sala with id.
   * DELETE salas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const sala = await Sala.findOrFail(params.id)
    return await sala.delete();
  }
}

module.exports = SalaController
