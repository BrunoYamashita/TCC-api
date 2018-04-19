import mongoose from 'mongoose';

const Address = new mongoose.Schema({
    cep: { type: String, required: true },
    street: { type: String, required: true },
    number: { type: String, required: true },
    complement: { type: String, required: false },
    neighborhood: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    created: { type: Date, required: true, default: Date.now },
    changed: { type: Date, required: false, default: Date.now },  
    active : { type: Boolean, default: true }    
})

export default mongoose.model('address', Address)