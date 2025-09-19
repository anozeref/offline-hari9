const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});
app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root: __dirname });
});
app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', { root: __dirname });
});
app.get('/product/:id/category/:idCat', (req, res) => {
  res.send(
    `Product ID: ${req.params.id} <br> Category ID: ${req.params.idCat}`
  );
});

app.use('/', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Contoh app listening on port ${port}`);
});
