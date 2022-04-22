export const validatePJ = (data) => {
  if (!data.nome) {
    alert('Campo "nome fantasia" obrigatório');
    return false;
  }

  if (!data.razao_social) {
    alert('Campo "razão social" obrigatório');
    return false;
  }

  if (!data.cpf_cnpj) {
    alert('Campo "cnpj" obrigatório');
    return false;
  }

  if (!data.tipo_logradouro) {
    alert('Campo "Complemento" obrigatório');
    return false;
  }

  if (!data.logradouro) {
    alert('Campo "endereço" obrigatório');
    return false;
  }

  if (!data.numero) {
    alert('Campo "número" obrigatório');
    return false;
  }

  if (!data.bairro) {
    alert('Campo "bairro" obrigatório');
    return false;
  }

  if (!data.cidade) {
    alert('Campo "bairro" obrigatório');
    return false;
  }

  if (!data.uf) {
    alert('Campo "uf" obrigatório');
    return false;
  }

  return true;
};

export const validatePF = (data) => {
  if (!data.nome) {
    alert('Campo "nome" obrigatório');
    return false;
  }

  if (!data.cpf_cnpj) {
    alert('Campo "cpf" obrigatório');
    return false;
  }

  if (!data.tipo_logradouro) {
    alert('Campo "complemento" obrigatório');
    return false;
  }

  if (!data.logradouro) {
    alert('Campo "endereço" obrigatório');
    return false;
  }

  if (!data.numero) {
    alert('Campo "número" obrigatório');
    return false;
  }

  // if (!data.bairro) {
  //   alert('Campo "bairro" obrigatório');
  //   console.log(data.bairro);
  //   return false;
  // }

  if (!data.cidade) {
    alert('Campo "bairro" obrigatório');
    return false;
  }

  if (!data.uf) {
    alert('Campo "uf" obrigatório');
    return false;
  }

  return true;
};
