const connection = require('./connection');

const read = async () => {
  const query = 'SELECT * FROM CadClientes.clientes;';
  const [data] = await connection.execute(query);
  return data;
};

const create = async (body) => {
  const { pessoa, status, nome, razao_social, cpf_cnpj, rg, im, cnh, data_nascimento,
    email, telefone, celular, nome_responsavel, email_responsavel, cpf_responsavel, 
    nascimento_responsavel, telefone_responseval, celular_responsavel, cep, 
    tipo_logradouro, logradouro, numero, bairro, cidade, uf, observacao } = body;
  
  const queryPJ = `INSERT INTO CadClientes.clientes
	  (pessoa, status, nome, razao_social, cpf_cnpj, im, email, telefone, celular, nome_responsavel,
      email_responsavel, cpf_responsavel, nascimento_responsavel, telefone_responseval,
      celular_responsavel, cep, tipo_logradouro, logradouro, numero, bairro,
      cidade, uf, observacao)
    VALUES 
	    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

  const queryPF = `INSERT INTO CadClientes.clientes
	  (pessoa, nome, razao_social, cpf_cnpj, email, telefone, celular, data_nascimento, 
      rg, cnh, cep, tipo_logradouro, logradouro, numero, bairro, cidade, uf, observacao)
    VALUES 
	    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
    
    if (pessoa === 'J') {
      await connection.execute(
        queryPJ,
        [
          pessoa, status, nome, razao_social, cpf_cnpj, im, email, telefone, celular, 
          nome_responsavel, email_responsavel, cpf_responsavel, nascimento_responsavel, 
          telefone_responseval, celular_responsavel, cep, tipo_logradouro, logradouro, 
          numero, bairro, cidade, uf, observacao,
        ]
      );
    }

    if (pessoa === 'F') {
      await connection.execute(
        queryPF,
        [
          pessoa, nome, razao_social, cpf_cnpj, email, telefone, celular, data_nascimento, 
          rg, cnh, cep, tipo_logradouro, logradouro, numero, bairro, cidade, uf, observacao,
        ]
      );
    }
};

const update = async (id, body) => {
  const { pessoa, status, nome, razao_social, cpf_cnpj, rg, im, cnh, data_nascimento,
    email, telefone, celular, nome_responsavel, email_responsavel, cpf_responsavel, 
    nascimento_responsavel, telefone_responseval, celular_responsavel, cep, 
    tipo_logradouro, logradouro, numero, bairro, cidade, uf, observacao } = body;
  
  const queryPJ = `UPDATE CadClientes.clientes SET
	  pessoa = ?, status = ?, nome = ?, razao_social = ?, cpf_cnpj = ?, im = ?, email = ?, telefone = ?,
    celular = ?, nome_responsavel = ?, email_responsavel = ?, cpf_responsavel = ?,
    nascimento_responsavel = ?, telefone_responseval = ?, celular_responsavel = ?,
    cep = ?, tipo_logradouro = ?, logradouro = ?, numero = ?, bairro = ?, cidade = ?,
    uf = ?, observacao = ?
    WHERE id = ?;`;

  const queryPF = `UPDATE CadClientes.clientes
	  pessoa = ?, nome = ?, razao_social = ?, cpf_cnpj = ?, email = ?, telefone = ?,
    celular = ?, data_nascimento = ?, rg = ?, cnh = ?, cep = ?, tipo_logradouro = ?,
    logradouro = ?, numero = ?, bairro = ?, cidade = ?, uf = ?, observacao = ?
    WHERE id = ?;`;
  
  if (pessoa === 'J') {
    await connection.execute(
      queryPJ,
      [
        pessoa, status, nome, razao_social, cpf_cnpj, im, email, telefone, celular, 
        nome_responsavel, email_responsavel, cpf_responsavel, nascimento_responsavel, 
        telefone_responseval, celular_responsavel, cep, tipo_logradouro, logradouro, 
        numero, bairro, cidade, uf, observacao, id,
      ]
    );
  }
  
  if (pessoa === 'F') {
    await connection.execute(
      queryPF,
      [
        pessoa, nome, razao_social, cpf_cnpj, email, telefone, celular, data_nascimento, 
        rg, cnh, cep, tipo_logradouro, logradouro, numero, bairro, cidade, uf, observacao, id,
      ]
    )
  }
};

const remove = async (id) => {
  const query = 'DELETE FROM CadClientes.clientes WHERE id = ?'
  await connection.execute(query, [id]);
}

module.exports =  {
  read,
  create,
  update,
  remove,
};