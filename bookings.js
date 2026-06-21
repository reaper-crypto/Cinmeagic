const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    poster: { type: String, required: true },
    genre: { type: String, required: true },
    duration: { type: String, required: true },
    rating: { type: String, required: true },
    year: { type: String, required: true },
    baseTicketPrice: { type: Number, required: true }
}, { versionKey: false });

module.exports = mongoose.model('Movie', movieSchema);
