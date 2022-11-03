import express from 'express'

import db from './database/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  const tarefas = await db.listaTarefas()

  res.render('index', { tarefas: tarefas })
})

router.post('/save', async (req, res) => {
  let tarefa = req.body.tarefa

  if (tarefa == '' || tarefa == ' ') {
    res.redirect('/')
  } else {
    await db.adicionaTarefa({ descricao: tarefa })

    res.redirect('/')
  }
})

router.post('/del', async (req, res) => {
  let id = req.body.id

  await db.deletaTarefa({ id: id })

  res.redirect('/')
})

export default router