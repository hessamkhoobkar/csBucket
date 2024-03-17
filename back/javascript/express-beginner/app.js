const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
})

app.all('*', (req, res) => {
  res.status(404).send('Not Found');
})

app.listen(6019, () => {
  console.log('Server is running on port 6019...');
})
