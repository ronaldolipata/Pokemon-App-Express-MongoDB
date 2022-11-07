import express, { query } from 'express';
import mongoose from 'mongoose';
import pokemons from '../models/pokemons.js';

const router = express.Router();

mongoose.connect('mongodb://localhost:27017/pokemons_db');

router.get('/', async (req, res) => {
  const data = await pokemons.find();
  const { offset, limit } = req.query;
  if (offset && query) {
    const sliced = data.slice(offset, limit);
    return res.status(200).send(sliced);
  }

  res.status(200).send(data);
});

router.get('/name/:name', async (req, res) => {
  const name = req.params.name;
  const showPokemonByName = await pokemons.aggregate([
    {
      $match: {
        name: name,
      },
    },
  ]);

  res.status(200).send(showPokemonByName);
});

router.get('/type/:type', async (req, res) => {
  const type = req.params.type;
  const showPokemonByType = await pokemons.aggregate([
    {
      $match: {
        type: type,
      },
    },
  ]);

  res.status(200).send(showPokemonByType);
});

export default router;
