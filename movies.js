const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    movieId: { type: Number, required: true },
    movieName: { type: String, required: true },
    date: { type: String, required: true },        // 'YYYY-MM-DD'
    time: { type: String, required: true },         // e.g. '7:00 PM'
    seats: { type: [String], required: true },
    totalPrice: { type: Number, required: true },
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    transactionId: { type: String, required: true, unique: true },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'confirmed' }
}, { timestamps: true, versionKey: false });

// Speeds up "which seats are already taken for this showtime" lookups
bookingSchema.index({ movieId: 1, date: 1, time: 1 });

module.exports = mongoose.model('Booking', bookingSchema);
