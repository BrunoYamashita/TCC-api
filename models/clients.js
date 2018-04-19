import mongoose from 'mongoose';
import config from '../../config';
import jwt from 'jsonwebtoken';

const Client = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    nickname: { type: String, required: true, default: mogoose.Schema.Types.ObjectId },
    cards:[{
        type: mongoose.Schema.Types.ObjectId, required: true        
    }],
    foto: { type: String, data: Buffer },
    address: [{
        type: mongoose.Schema.Types.ObjectId, required: true
      }],
    
})

export default mongoose.model('client', Client)
