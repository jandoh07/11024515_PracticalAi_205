const mongoose = require('mongoose')

const encounterSchema = mongoose.Schema(
    {
        PatientID:{
            type: Number,
            required: true,
        },
        Date:{
            type: String,
            required: true,
        },
        Time:{
            type: String,
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