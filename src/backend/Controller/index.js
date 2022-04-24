const Service = require('../Service');

const read = async (_req, res) => {
  try {
    const data = await Service.read();
    if (!data) return res.status(401).json({ message: 'Not found' });
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const create = async (req, res) => {
  try {
    await Service.create(req.body);
    res.status(201).send('Cadastro realizado com sucesso');
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    await Service.update(id, req.body);
    res.status(200).send('Atualizado com sucesso');
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Service.remove(id);
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};


module.exports = {
  read,
  create,
  update,
  remove,
};
