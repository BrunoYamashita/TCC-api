import mongoose from 'mongoose';
import crypto from 'crypto'
import config from '../config';
import jwt from 'jsonwebtoken';
import { saltHashPassword, compare } from '../services/crypto'

/**
 * Default user databse schema
 */
const User = new mongoose.Schema({
  profile: { type: String, default: 'user' },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  salt: { type: String, required: false },
  created: { type: Date, required: true, default: Date.now },
  changed: { type: Date, required: false, default: Date.now },  
  active : { type: Boolean, default: true }

})

User.pre('save', function preSave (next) {
  const user = this

  if (!user.isModified('password')) {
    return next()
  }
  const hashedPassword = saltHashPassword(user.password)
  user.password = hashedPassword.password;
  user.salt = hashedPassword.salt;
  next();
})

User.methods.generateToken = function generateToken () {
  const user = this;
  return jwt.sign({ id: user.id }, config.secret,{
    expiresIn: 86400 // expires in 24 hours
  })
}

export default mongoose.model('user', User)
