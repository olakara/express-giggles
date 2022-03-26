const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

const buildersRouter = express.Router();

buildersRouter.route('/builders').get((req, res) => {
  const values = [{
    name: 'Honda',
  }, {
    name: 'Volvo',
  }];

  return res.json(values);
});

app.use('/api', buildersRouter);

app.listen(port, () => {
  console.log('Running on PORT: ', port);
});

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});
