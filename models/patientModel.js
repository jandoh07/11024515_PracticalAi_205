const mongoose = require('mongoose')

const patientSchema = mongoose.Schema(
    {
        PatientID:{
            type: Number,
            required: true,
        },
        Surname:{
            type: String,
            required: true,
        },
        Othernames:{
            type: String,
            required: true,
        },
        Gender:{
            type: String,
            required: true,
        },
        PhoneNumber:{
            type: Number,
            required: true,
        },
        Address:{
            type: String,
            required: false,
        },
        EmergencyName:{
            type: String,
            required: false,
        },
        Contact:{
            type: Number,
            required: true,
        },
        Relationship: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;