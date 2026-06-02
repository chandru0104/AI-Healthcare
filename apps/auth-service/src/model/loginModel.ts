import mongoose from 'mongoose';

const user = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
  },
});

export const User = mongoose.model('user', user);
