import mongoose from 'mongoose';

const Order = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true, unique: true },
    quantity: { type: String, required: false },
    products:[{
        type: mongoose.Schema.Types.ObjectId, required: true        
    }],
    foto: [{ type: String, data: Buffer }],
    client: { type: mongoose.Schema.Types.ObjectId, required: true },
    
})

export default mongoose.model('order', Order)
