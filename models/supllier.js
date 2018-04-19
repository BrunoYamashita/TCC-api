import mongoose from 'mongoose';

const Supplier = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true, unique: true },
    cnpj: { type: String, required: false },
    foto: [{ type: String, data: Buffer }],
    address: { type: mongoose.Schema.Types.ObjectId, required: true },
    
})

export default mongoose.model('supplier', Supplier)
