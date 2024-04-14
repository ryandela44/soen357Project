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

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;