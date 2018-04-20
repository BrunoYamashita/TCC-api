import mongoose from 'mongoose';
import config from '../config';
import jwt from 'jsonwebtoken';

const Client = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    nickname: { type: String, required: true, default: mongoose.Schema.Types.ObjectId },
    rg: { type: String, required: true },
    cpf: { type: String, required: true },
    birth: { type: Date, required: true },
    gender: { type: String, required: true },
    landline: { type: String, required: false },
    cellPhone: { type: String, required: false },
    cards:[{
        type: mongoose.Schema.Types.ObjectId, required: true        
    }],
    picture: { type: String, data: Buffer , required: false},
    address: [{
        type: mongoose.Schema.Types.ObjectId, required: true
      }],
    created: { type: Date, required: true, default: Date.now },
    changed: { type: Date, required: false, default: Date.now },  
    active : { type: Boolean, default: true }    
})

Client.pre('save', function preSave (next) {
    const client = this

    if (!client.isModified('password')) {
        return next()
    }
    saltHashPassword(client.password).then(hashedPassword =>{
        client.password = hashedPassword.password;
        client.salt = hashedPassword.salt;
        next();
    })
})
  
export default mongoose.model('client', Client)
