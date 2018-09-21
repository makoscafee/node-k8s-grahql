import mongoose from 'mongoose';
import Shop from './shop.model';

// SET UP Mongoose Promises.
mongoose.Promise = global.Promise;

export const startDB = uri =>
  mongoose.connect(
    `${uri}`,
    { useNewUrlParser: true }
  );

export const models = {
  Shop
};
