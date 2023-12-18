const mongoose = require('mongoose')

const encounterSchema = mongoose.Schema(
    {
        PatientID:{
            type: Number,
            required: true,
        },
        Date:{
            type: new Date(),
            required: true,
        },
        TypeOfEncounter:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Encounter = mongoose.model('Encounter', encounterSchema);

module.exports = Encounter;