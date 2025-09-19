
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('layout'));
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
app.get('/product', (req, res) => {
  const daftarProduk = [
    { id: 1, nama: 'Laptop', harga: 7500000, img: "https://images.tokopedia.net/img/JFrBQq/2024/1/16/4b9cc476-f5fc-45ee-a469-8b077a51d5e7.jpg" },
    { id: 2, nama: 'Smartphone', harga: 3500000, img:"https://www.ufoelektronika.com/image/cache/catalog/A54/A54-1000x1000.jpg" },
    { id: 3, nama: 'Headset', harga: 250000, img:"https://png.pngtree.com/png-clipart/20230416/ourmid/pngtree-headset-gaming-headset-png-image_6706672.png" },
    { id: 4, nama: 'Keyboard', harga: 150000, img: "https://www.nicepng.com/png/detail/21-212212_gaming-keyboard-png-svg-library-library-controls-for.png" }
  ];

  renderWithLayout(res, 'product', {
    title: 'Daftar Produk',
    heading: 'Produk Kami',
    products: daftarProduk
  });
});

app.get('/product/:id/category/:idCat', (req, res) => {
  res.send(
    `Product ID: ${req.params.id} <br> Category ID: ${req.params.idCat}`
  );
});

// halaman Error
app.use((req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

