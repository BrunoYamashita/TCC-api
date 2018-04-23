import mongoose from 'mongoose';

const Card = new mongoose.Schema({
    number: { type: String, required: true },
    expiration: { type: Date, required: true },
    code: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    created: { type: Date, required: true, default: Date.now },
    changed: { type: Date, required: true, default: Date.now },
    active : { type: Boolean, required: true, default: true },
    valid: { type: Boolean, default: true }
})

export default mongoose.model('card', Card)