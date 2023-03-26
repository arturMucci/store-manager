const express = require('express');
const { productRouter, salesRouter } = require('./routes');

const app = express();
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());

app.use('/products', productRouter);

app.use('/sales', salesRouter);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use(errorHandler);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;
