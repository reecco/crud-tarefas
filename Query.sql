CREATE DATABASE crud_tarefas;

USE crud_tarefas;

CREATE TABLE tarefas (
  id PRIMARY KEY INT NOT NULL AUTO_INCREMENT,
  descricao VARCHAR(250) NOT NULL,
  UNIQUE (id)
);