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

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;