const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Use CORS middleware
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/test', (req, res) => {
  res.send('Backend is connected!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
