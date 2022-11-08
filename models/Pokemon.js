import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: String,
  img: String,
  type: Array,
  stats: Object,
  damages: Object,
  misc: Object,
});

const Pokemon = mongoose.model('pokemons', schema);
export default Pokemon;
