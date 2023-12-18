const express = require('express');
const mongoose = require('mongoose');
const Patient = require('./models/patientModel');
const Encounter = require('./models/startEncounterModel')
const app = express();

app.use(express.json())

app.post("/patient", async(req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(200).json(patient)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});


app.post("/encounter", async(req, res) => {
    try {
        const encounter = await Encounter.create(req.body);
        res.status(200).json(encounter)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})


mongoose.connect('mongodb+srv://amjoshua59:jandoh@jandoh.rvgbwcf.mongodb.net/')
.then(() => {
    console.log('connected to mongodb')
    app.listen(3000, ()=> {
        console.log('Node API app is running on port 3000')
    }) 
}).catch((error) => {
    console.log(error)
})