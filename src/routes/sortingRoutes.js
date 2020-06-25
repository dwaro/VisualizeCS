const util = require('../utilities/utilities');
const sortController = require('../controllers/sortController');

module.exports = (app) => {
  app.get('/api/sort', async (req, res) => {
    const algorithm = req.query.algorithm;
    let data = util.formatData(req.query.data);

    let result = await sortController.delegate(algorithm, data);

    console.log(result);

    if (result) {
      res.send(result);
    } else {
      res.status(401).send('Error');
    }
  });
};
