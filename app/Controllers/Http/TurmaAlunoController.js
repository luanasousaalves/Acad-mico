'use strict'

const TurmaAluno = use('App/models/TurmaAluno')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with turmaalunos
 */
class TurmaAlunoController {
  /**
   * Show a list of all turmaalunos.
   * GET turmaalunos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return TurmaAluno.all();
  }

  /**
   * Create/save a new turmaaluno.
   * POST turmaalunos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const campos = TurmaAluno.getCampoTurmaAluno() //requisição de uma variável em outro arquivo
    const turmaAlunos = request.only(campos) //chamando a variável em outra linha
    return await TurmaAluno.create(turmaAlunos)
  }

  /**
   * Display a single turmaaluno.
   * GET turmaalunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await TurmaAluno.query()     
                            .with('alunos')
                            .with('turmas')
                            .where(' id', params.id)
                            .first();
  }

  /**
   * Update turmaaluno details.
   * PUT or PATCH turmaalunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const turmaAluno = await TurmaAluno.findOrFail(params.id)

    const campos = TurmaAluno.getCampoTurmaAluno()
    const dados = request.only(campos)

    turmaAluno.merge(dados) 
    await turmaAluno.save() 
    return turmaAluno
  }

  /**
   * Delete a turmaaluno with id.
   * DELETE turmaalunos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const turmaAluno = await TurmaAluno.findOrFail(params.id)
    return await turmaAluno.delete();
  }
}

module.exports = TurmaAlunoController
