-- Recomeço Profissional - Projeto Integrador Extensionista II
-- Atividade 2 - Estrutura do banco de dados
-- Modelo baseado no MER do Projeto Integrador Extensionista I.
-- ATENCAO: este script apaga e recria o banco de dados a cada execucao.

SET NAMES utf8mb4;

DROP DATABASE IF EXISTS recomeco_profissional;
CREATE DATABASE recomeco_profissional
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE recomeco_profissional;

-- Participantes atendidos pela ONG
CREATE TABLE participante (
    id_participante INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    cpf VARCHAR(14) UNIQUE,
    email VARCHAR(100),
    telefone VARCHAR(20),
    data_cadastro DATE NOT NULL DEFAULT (CURRENT_DATE),
    ativo BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT chk_participante_nome CHECK (CHAR_LENGTH(TRIM(nome)) > 0)
) ENGINE = InnoDB;

-- Cursos e oficinas oferecidos pela ONG
CREATE TABLE curso (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    carga_horaria INT NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE NOT NULL,
    vagas INT NOT NULL,
    CONSTRAINT chk_curso_nome CHECK (CHAR_LENGTH(TRIM(nome)) > 0),
    CONSTRAINT chk_curso_carga_horaria CHECK (carga_horaria > 0),
    CONSTRAINT chk_curso_datas CHECK (data_fim >= data_inicio),
    CONSTRAINT chk_curso_vagas CHECK (vagas > 0)
) ENGINE = InnoDB;

-- Relacao N:N entre participantes e cursos, com registro de presenca
CREATE TABLE participacao (
    id_participacao INT AUTO_INCREMENT PRIMARY KEY,
    id_participante INT NOT NULL,
    id_curso INT NOT NULL,
    data_participacao DATE NOT NULL,
    presenca BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT uq_participacao_registro
        UNIQUE (id_participante, id_curso, data_participacao),
    CONSTRAINT fk_participacao_participante
        FOREIGN KEY (id_participante)
        REFERENCES participante (id_participante)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    CONSTRAINT fk_participacao_curso
        FOREIGN KEY (id_curso)
        REFERENCES curso (id_curso)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
) ENGINE = InnoDB;

-- Encaminhamentos dos participantes para oportunidades de emprego
CREATE TABLE encaminhamento (
    id_encaminhamento INT AUTO_INCREMENT PRIMARY KEY,
    id_participante INT NOT NULL,
    empresa VARCHAR(150) NOT NULL,
    cargo VARCHAR(120) NOT NULL,
    data_encaminhamento DATE NOT NULL,
    status ENUM('Em analise', 'Entrevista', 'Contratado', 'Encerrado')
        NOT NULL DEFAULT 'Em analise',
    CONSTRAINT chk_encaminhamento_empresa
        CHECK (CHAR_LENGTH(TRIM(empresa)) > 0),
    CONSTRAINT chk_encaminhamento_cargo
        CHECK (CHAR_LENGTH(TRIM(cargo)) > 0),
    CONSTRAINT fk_encaminhamento_participante
        FOREIGN KEY (id_participante)
        REFERENCES participante (id_participante)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
) ENGINE = InnoDB;
