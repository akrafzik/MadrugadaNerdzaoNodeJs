const express = require('express');

const port = 3500;


async function main() {
  try {

    const app = express();
    // const mongoClient = await mongo.connect('mongodb://ronaldinho:nerdzao1@ds213832.mlab.com:13832/?authDatabase=admin', { useNewUrlParser: true });
    // const db = mongoClient.db('nerdzao-rick-and-morty');
    app.get('/personagens', async (req, res) => {
      // const todosPersonagens = await mongoClient.characters.find();
      const lista = [{ name: 'Rick Sanchez', dimension: 'C-137' }, { name: 'Morty Smith', dimension: 'C-137' }];
      res.send(lista);
    });

    app.listen(port, () => console.log(`Server running on localhost:${port}`));
  } catch (err) {
    console.log('err :', err);
  }
}

main();
