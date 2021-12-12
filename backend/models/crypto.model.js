const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cryptoSchema = new Schema ({

    tokenName: {
        type: String,
        required: true,
        trim: true
    },
    priceUsd: {
        type: Number,
        required: false,
        trim: true
    }

}, {
    timestamp: true
});

const Crypto = mongoose.model('tokens', cryptoSchema);

module.exports = Crypto;