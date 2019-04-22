import { model, Schema } from 'mongoose';

const schema = new Schema({
  name: String,
  description: String,
  image: String,
  // ADD Stock level relation here.
});

export default model('Item', schema);
