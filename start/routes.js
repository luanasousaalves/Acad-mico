'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/alunos', 'AlunoController').apiOnly()
Route.resource('/cursos', 'CursoController').apiOnly()
Route.resource('/disciplinas', 'DisciplinaController').apiOnly()
Route.resource('/professor', 'ProfessorController').apiOnly()
Route.resource('/sala', 'SalaController').apiOnly()
Route.resource('/semestre', 'SemestreController').apiOnly()
Route.resource('/turmaAluno', 'TurmaAlunoController').apiOnly()
Route.resource('/turma', 'TurmaController').apiOnly()

