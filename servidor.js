const express = require('express');
const app = express();
const port = 3000;

// Configurar EJS como template engine
app.set('view engine', 'ejs');

// Servir arquivos estáticos
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
    res.render('petshop');
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
