const connection = require('./connection');

const read = async () => {
  const query = 'SELECT * FROM CadClientes.clientes;';
  const [data] = await connection.execute(query);
  return data;
};

const create = async (body) => {
  const { bairro, celular_responsavel, cep, celular, cidade, cnh, cpf_cnpj, 
    cpf_responsavel, email, data_nascimento, email_responsavel, im, logradouro, 
    nascimento_responsavel, nome, nome_responsavel, numero, observacao, 
    pessoa, razao_social, rg, status, telefone, telefone_responsavel, 
    tipo_logradouro, uf } = body;
  
  const query = `INSERT INTO CadClientes.clientes
	  (bairro, celular_responsavel, cep, celular, cidade, cnh, cpf_cnpj, 
      cpf_responsavel, email, data_nascimento, email_responsavel, im, logradouro, 
      nascimento_responsavel, nome, nome_responsavel, numero, observacao, 
      pessoa, razao_social, rg, status, telefone, telefone_responsavel, 
      tipo_logradouro, uf)
    VALUES 
	    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
    
    await connection.execute(
      query,
      [
        bairro, celular_responsavel, cep, celular, cidade, cnh, cpf_cnpj, 
        cpf_responsavel, email, data_nascimento, email_responsavel, im, logradouro, 
        nascimento_responsavel, nome, nome_responsavel, numero, observacao, 
        pessoa, razao_social, rg, status, telefone, telefone_responsavel, 
        tipo_logradouro, uf,
      ]
    );
};

const update = async (id, body) => {
  const { pessoa, status, nome, razao_social, cpf_cnpj, rg, im, cnh, data_nascimento,
    email, telefone, celular, nome_responsavel, email_responsavel, cpf_responsavel, 
    nascimento_responsavel, telefone_responsavel, celular_responsavel, cep, 
    tipo_logradouro, logradouro, numero, bairro, cidade, uf, observacao } = body;
  
  const queryPJ = `UPDATE CadClientes.clientes SET
	  pessoa = ?, status = ?, nome = ?, razao_social = ?, cpf_cnpj = ?, im = ?, email = ?, telefone = ?,
    celular = ?, nome_responsavel = ?, email_responsavel = ?, cpf_responsavel = ?,
    nascimento_responsavel = ?, telefone_responsavel = ?, celular_responsavel = ?,
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
        telefone_responsavel, celular_responsavel, cep, tipo_logradouro, logradouro, 
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