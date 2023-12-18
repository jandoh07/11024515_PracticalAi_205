const mongoose = require('mongoose')

const vitalsSchema = mongoose.Schema(
    {
        BloodPressure:{
            type: Number,
            required: true,
        },
        Temperature:{
            type: Number,
            required: true,
        },
        Pulse:{
            type: Number,
            required: true,
        }
    },
)

const Vitals = mongoose.model('Vitals', vitalsSchema);

module.exports = Vitals;