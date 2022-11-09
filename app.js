import express from 'express';
import process from 'node:process';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import pokemonsRouter from './routes/pokemons.js';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

app.use('/pokemons', pokemonsRouter);

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
