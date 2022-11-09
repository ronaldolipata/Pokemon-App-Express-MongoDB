import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const schema = new Schema(
  {
    name: String,
    img: String,
    type: Array,
    stats: Object,
    damages: Object,
    misc: Object,
  },
  { collection: 'pokemons' }
);

const Pokemon = model('Pokemon', schema);
export default Pokemon;
