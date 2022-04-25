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
  const { bairro, celular_responsavel, cep, celular, cidade, cnh, cpf_cnpj, 
    cpf_responsavel, email, data_nascimento, email_responsavel, im, logradouro, 
    nascimento_responsavel, nome, nome_responsavel, numero, observacao, 
    pessoa, razao_social, rg, status, telefone, telefone_responsavel, 
    tipo_logradouro, uf } = body;
  
  const query = `UPDATE CadClientes.clientes SET
    bairro = ?, celular_responsavel = ?, cep = ?, celular = ?, cidade = ?,
    cnh = ?, cpf_cnpj = ?, cpf_responsavel = ?, email = ?,
    data_nascimento = ?, email_responsavel = ?, im = ?, logradouro = ?, 
    nascimento_responsavel = ?, nome = ?, nome_responsavel = ?, numero = ?, observacao = ?, 
    pessoa = ?, razao_social = ?, rg = ?, status = ?, telefone = ?,
    telefone_responsavel = ?, tipo_logradouro = ?, uf = ?
    WHERE id = ?;`;

  await connection.execute(
    query,
    [
      bairro, celular_responsavel, cep, celular, cidade, cnh, cpf_cnpj, 
      cpf_responsavel, email, data_nascimento, email_responsavel, im, logradouro, 
      nascimento_responsavel, nome, nome_responsavel, numero, observacao, 
      pessoa, razao_social, rg, status, telefone, telefone_responsavel, 
      tipo_logradouro, uf, id,
    ]
  );
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