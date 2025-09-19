const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
function renderWithLayout(res, view, options) {
  ejs.renderFile(path.join(__dirname, 'views', view + '.ejs'), options, (err, str) => {
    if (err) throw err;
    res.render('base', { ...options, body: str });
  });
}

app.get('/', (req, res) => {
  renderWithLayout(res, 'index', {
    title: 'Beranda',
    heading: 'Selamat Datang di Website Saya'
  });
});

app.get('/about', (req, res) => {
  renderWithLayout(res, 'about', {
    title: 'Tentang Kami',
    heading: 'Tentang Kami'
  });
});

app.get('/contact', (req, res) => {
  renderWithLayout(res, 'contact', {
    title: 'Kontak',
    heading: 'Hubungi Kami'
  });
});

app.get('/product/:id/category/:idCat', (req, res) => {
  res.send(
    `Product ID: ${req.params.id} <br> Category ID: ${req.params.idCat}`
  );
});

// halaman 404
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

