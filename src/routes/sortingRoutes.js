const util = require('../utilities/utilities');
const sortController = require('../controllers/sortController');

module.exports = (app) => {
  app.get('/api/sort', async (req, res) => {
    const algorithm = req.query.algorithm;
    const type = req.query.type;
    let data = util.formatData(req.query.data, type);

    let result = sortController.delegate(algorithm, data);

    if (result) {
      res.send(result);
    } else {
      res.status(403).send('Error');
    }
  });
};
