const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware para parsear os dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar o template engine EJS
app.set('view engine', 'ejs');

// Servir arquivos estáticos (CSS)
app.use(express.static('public'));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.render('index');
});

// Rota para a página de listagem de carros
app.get('/listagem', (req, res) => {
    res.render('listagem');
});

// Rota para o formulário de cadastro de carros
app.get('/formulario', (req, res) => {
    res.render('formulario');
});

// Rota POST para receber os dados do formulário
app.post('/carro', (req, res) => {
    const { modelo, marca, ano, cor, kilometragem, valor } = req.body;
    
    console.log("Modelo do carro: " + modelo);
    console.log("Marca do carro: " + marca);
    console.log("Ano do carro: " + ano);
    console.log("Cor do carro: " + cor);
    console.log("Kilometragem do carro: " + kilometragem);
    console.log("Valor do carro: " + valor);
    
    res.send("Dados recebidos com sucesso!");
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na http://localhost:${port}`);
});
