const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body);
})

app.all('*', (req, res) => {
  res.status(404).send('Not Found');
})

app.listen(8090, () => {
  console.log(`localhost:8090`);
  console.log('Server is running on port 8090...');
})
