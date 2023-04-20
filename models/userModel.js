import mongoose from "mongoose";
import isEmail from 'validator/lib/isEmail';
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your firstname"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your lastname"],
  },
  email: {
    type: String,
    required: [true, "Please enter email address"],
    unique: true,
    validate: [isEmail, "Please enter valid email address"],
  },
  password: {
    type: String,
    select:false,
    required: [true, "Please enter your password"],
    minLength: [8, "Password must should be 8 chracters"],
  },
});

mongoose.models = {}

export const User = mongoose.model('User',userSchema)
