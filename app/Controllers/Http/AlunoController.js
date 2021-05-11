'use strict'

const Aluno = use('App/models/Aluno')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with alunos
 */
class AlunoController {
  /**
   * Show a list of all alunos.
   * GET alunos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return Aluno.all();
  }

  /**
   * Create/save a new aluno.
   * POST alunos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = Aluno.getCampoAluno() //requisição de uma variável em outro arquivo
    const alunos = request.only(campos) //chamando a variável em outra linha
    return await Aluno.create(alunos)
  }

  /**
   * Display a single aluno.
   * GET alunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await Aluno.findOrFail(params.id);
  }

  /**
   * Update aluno details.
   * PUT or PATCH alunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const aluno = await Aluno.findOrFail(params.id)

    const campos = Aluno.getCampoAluno()
    const dados = request.only(campos)

    aluno.merge(dados) 
    await aluno.save() 
    return aluno
  }

  /**
   * Delete a aluno with id.
   * DELETE alunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const aluno = await Aluno.findOrFail(params.id)
    return await aluno.delete();
  }
}

module.exports = AlunoController
