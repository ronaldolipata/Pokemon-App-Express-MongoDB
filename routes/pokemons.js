import express from 'express';
import mongoose from 'mongoose';
import Pokemon from '../models/pokemons.js';

const router = express.Router();

mongoose.connect('mongodb://localhost:27017/pokemons_db');

router.get('/', async (req, res) => {
  const limit = req.query.limit || 3;
  const offset = req.query.offset || 0;

  try {
    const data = await Pokemon.aggregate([
      { $limit: parseInt(limit) },
      { $skip: parseInt(offset) },
    ]);
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
});

router.get('/name/:name', async (req, res) => {
  const name = req.params.name;

  try {
    const showPokemonByName = await Pokemon.aggregate([
      {
        $match: {
          name: name,
        },
      },
    ]);

    res.status(200).send(showPokemonByName);
  } catch (error) {
    console.log(error);
  }
});

router.get('/type/:type', async (req, res) => {
  const type = req.params.type;

  try {
    const showPokemonByType = await Pokemon.aggregate([
      {
        $match: {
          type: type,
        },
      },
    ]);

    res.status(200).send(showPokemonByType);
  } catch (error) {
    console.log(error);
  }
});

export default router;
