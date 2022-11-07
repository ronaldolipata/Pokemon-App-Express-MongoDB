import express from 'express';
import process from 'process';
import pokemonsRouter from './routes/pokemons.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/pokemons', pokemonsRouter);

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
