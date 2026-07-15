const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

console.log(1)

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  console.log('Received data:', name, email);
  res.json({
    message: "Form submitted successfully!",
    name,
    email
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});