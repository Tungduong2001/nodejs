import mongoose from "mongoose";
import { Schema } from "mongoose";
const productChema = new Schema({
    name: {
        type: String,
        minlength: 5,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Product', productChema)