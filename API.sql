DROP DATABASE IF EXISTS CadClientes;

CREATE DATABASE CadClientes;

CREATE TABLE CadClientes.clientes (
	id INT NOT NULL auto_increment,
    pessoa VARCHAR(50),
    status VARCHAR(30), 
    nome VARCHAR(50),
    razao_social VARCHAR(50),
    cpf_cnpj VARCHAR(50),
    rg VARCHAR(50),
    im VARCHAR(50),
    cnh VARCHAR(50),
    data_nascimento VARCHAR(50),
    email VARCHAR(50),
    telefone VARCHAR(50),
    celular VARCHAR(50),
    nome_responsavel VARCHAR(50),
    cpf_responsavel VARCHAR(50),
    nascimento_responsavel VARCHAR(50),
    email_responsavel VARCHAR(50),
    telefone_responsavel VARCHAR(50),
    celular_responsavel VARCHAR(50),
    cep VARCHAR(50),
    tipo_logradouro VARCHAR(50),
    logradouro VARCHAR(50),
    numero VARCHAR(50),
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    uf VARCHAR(50),
    observacao CHAR(200),
    primary key(id)
) ENGINE=InnoDB;

INSERT INTO CadClientes.clientes
	(pessoa, status, nome, razao_social, cpf_cnpj, im, email, telefone, celular, nome_responsavel,
	email_responsavel, cpf_responsavel, nascimento_responsavel, telefone_responseval, celular_responsavel,
    cep, tipo_logradouro, logradouro, numero, bairro, cidade, uf, observacao)
VALUES 
	('J', 'ativo', 'Empresa 1', 'Empresa 1 LTDA', '12.345.678/0001-12', '000000001',
    'empresa1@email.com', '3512345678', '35912345678', 'Fulano de Tal', 'fulano@email.com',
    '123.456.789-00', '10/10/1990', '3512345678', '35912345678', '37950000', 'prédio',
    'Rua x', '1234', 'Bairro novo', 'São Paulo', 'SP',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
    
INSERT INTO CadClientes.clientes
	(pessoa, status, nome, razao_social, cpf_cnpj, im, email, telefone, celular, nome_responsavel,
	email_responsavel, cpf_responsavel, nascimento_responsavel, telefone_responseval, celular_responsavel,
    cep, tipo_logradouro, logradouro, numero, bairro, cidade, uf, observacao)
VALUES 
	('J', 'ativo', 'Empresa 2', 'Empresa 2 LTDA', '12.345.678/0001-12', '000000002',
    'empresa2@email.com', '3512345678', '35912345678', 'Beltrano de Tal', 'beltrano@email.com',
    '123.456.789-00', '10/10/1990', '3512345678', '35912345678', '37950000', 'prédio',
    'Rua y', '1234', 'Bairro azul', 'Ribeirão Preto', 'SP',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
    
INSERT INTO CadClientes.clientes
	(pessoa, status, nome, razao_social, cpf_cnpj, im, email, telefone, celular, nome_responsavel,
	email_responsavel, cpf_responsavel, nascimento_responsavel, telefone_responseval, celular_responsavel,
    cep, tipo_logradouro, logradouro, numero, bairro, cidade, uf, observacao)
VALUES 
	('J', 'ativo', 'Empresa 3', 'Empresa 3 LTDA', '12.345.678/0001-12', '000000003',
    'empresa3@email.com', '3512345678', '35912345678', 'Ciclano de Tal', 'ciclano@email.com',
    '123.456.789-00', '10/10/1990', '3512345678', '35912345678', '37950000', 'prédio',
    'Rua z', '1234', 'Jardim margarida', 'Águas Claras', 'RJ',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');

INSERT INTO CadClientes.clientes
	(pessoa, nome, razao_social, cpf_cnpj, email, telefone, celular, data_nascimento, 
    rg, cnh, cep, tipo_logradouro, logradouro, numero, bairro, cidade, uf, observacao)
VALUES 
	('F', 'João Marcos', 'marquinho', '123.456.789-00', 'joamarcos@email.com', '3512345678',
    '16912345678', '01/01/1990', '11.222.333', '1234.5678.9123.4567', '38408950', 'casa',
    'Rua x', '1234', 'Bairro novo', 'São Paulo', 'SP',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
    
INSERT INTO CadClientes.clientes
	(pessoa, nome, razao_social, cpf_cnpj, email, telefone, celular, data_nascimento, 
    rg, cnh, cep, tipo_logradouro, logradouro, numero, bairro, cidade, uf, observacao)
VALUES 
	('F', 'Maria Aparecida', 'cida', '123.456.789-00', 'maria@email.com', '3512345678',
    '16912345678', '01/01/1990', '11.222.333', '1234.5678.9123.4567', '38408950', 'casa',
    'Rua y', '1234', 'Bairro azul', 'São Paulo', 'SP',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
    
INSERT INTO CadClientes.clientes
	(pessoa, nome, razao_social, cpf_cnpj, email, telefone, celular, data_nascimento, 
    rg, cnh, cep, tipo_logradouro, logradouro, numero, bairro, cidade, uf, observacao)
VALUES 
	('F', 'Pedro da Silva', '', '123.456.789-00', 'pedro@email.com', '3512345678',
    '16912345678', '01/01/1990', '11.222.333', '1234.5678.9123.4567', '38408950', 'casa',
    'Rua z', '1234', 'Jardim margarida', 'Águas claras', 'RJ',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');

SET SQL_SAFE_UPDATES = 0;