import mysql from 'mysql2/promise'

async function connect() {
  if (global.connection && global.connection.state !== 'disconnected')
    return global.connection

  const connection = await mysql.createConnection('mysql://root:root@localhost:3306/crud_tarefas')
  console.log('Conectou no MySQL')
  global.connection = connection
  return connection
}

async function listaTarefas() {
  const conn = await connect()

  const sql = 'SELECT * FROM tarefas;'
  const [rows] = await conn.query(sql)

  return rows
}

async function adicionaTarefa(tarefa) {
  const conn = await connect()

  const sql = 'INSERT INTO tarefas(descricao) VALUES (?);'
  const values = [tarefa.descricao]

  await conn.query(sql, values)
}

async function editaTarefa(tarefa) {
  const conn = await connect()

  const sql = 'UPDATE tarefas SET descricao=? WHERE id =?;'
  const values = [tarefa.id, tarefa.descricao]

  await conn.query(sql, values)
}

async function deletaTarefa(tarefa) {
  const conn = await connect()

  const sql = 'DELETE from tarefas WHERE id=?;'
  const values = [tarefa.id]

  await conn.query(sql, values)
}

export default { listaTarefas, adicionaTarefa, deletaTarefa }