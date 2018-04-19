import mongoose from 'mongoose';

const product = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, required: true },
    subCtg: [{ type: mongoose.Schema.Types.ObjectId }],
    quantity: { type: String, required: false },
    foto: [{ type: String, data: Buffer }],
    supplier: { type: mongoose.Schema.Types.ObjectId, required: true },
    client: { type: mongoose.Schema.Types.ObjectId, required: true },
    
})

export default mongoose.model('product', Product)
