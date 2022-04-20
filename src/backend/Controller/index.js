const Service = require('../Service');


const read = async (_req, res) => {
  try {
    const data = await Service.read();
    if (!data) return res.status(401).json({ message: 'Not found' });
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}


module.exports = {
  read,
};
