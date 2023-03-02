const express = require('express');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

const app = express();


app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on port ${PORT}`);
});
