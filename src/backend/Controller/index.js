const Service = require('../Service');


const read = (_req, res) => {
  try {
    const data = Service.read();
    if (!data) return res.status(401).json({ message: 'Not found' });
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}


module.exports = {
  read,
};
