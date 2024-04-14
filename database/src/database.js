const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: String,
    normal_price: Number,
    weight_g: Number,
    discount_rate: Number,
    manufacturer: String,
    unit: Boolean,
    tag: String,
    image_url: String
});

const storeSchema = new Schema({
    name: String,
    items: [itemSchema]
});

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true } // In a real application, this should be hashed
});


const Store = mongoose.model('Store', storeSchema);
const User = mongoose.model('User', userSchema);

module.exports = {Store,User};