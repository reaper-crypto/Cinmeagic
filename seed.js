const mongoose = require('mongoose');

// Singleton-style document that stores every non-movie, non-booking setting
// that used to live in data.json (currency, schedule, seat layout, payment
// instructions, ui theme colors).
const configSchema = new mongoose.Schema({
    key: { type: String, default: 'main', unique: true },
    currency: {
        name: String,
        symbol: String
    },
    schedule: {
        availableDatesCount: Number,
        availableTimes: [String]
    },
    seatConfiguration: {
        rows: [String],
        seatsPerRow: Number,
        seatTypes: {
            regular: {
                rows: [String],
                priceMultiplier: Number
            },
            premium: {
                rows: [String],
                priceMultiplier: Number
            }
        },
        prebooked: {
            default: [String]
        }
    },
    payment: {
        methodName: String,
        bkashNumber: String,
        paymentInstructions: [String],
        transactionIdMinLength: Number
    },
    ui: {
        websiteName: String,
        seatColors: {
            available: String,
            selected: String,
            booked: String
        }
    }
}, { versionKey: false });

module.exports = mongoose.model('Config', configSchema);
