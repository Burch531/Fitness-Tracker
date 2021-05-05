const express = require('express');
const router = express.Router();
const db = require("../models");


router.get("/api/workouts", (req, res) => {
    db.workout.find()
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(400).json(err);

        })
});

router.post("/api/workouts", ({ body }, res) => {
    db.workout.create(body)
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    db.workout.find()
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.status(400).json(err);

        })

});

router.get("/api/workouts/:id", (req, res) => {

    const { id } = req.params;
    db.workout.findOne({
        _id: id,
    }).then(dbworkout => {
        res.json(dbworkout);
    })
        .catch(err => {
            res.status(400).json
        })

});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    const id = params.id;
    let savedExercises = [];


    db.workout.find({ _id: id })
        .then(dbworkout => {
            savedExercises = dbworkout[0].exercises;
            res.json(savedExercises);
            let allExercises = [...savedExercises, body];
            updateworkout(allExercises);
        })
        .catch(err => {
            res.json(err);
        });

    function updateworkout(exercises) {
        db.workout.findByIdAndUpdate(id, { exercises: exercises }, function (err, doc) {
            if (err) {
                console.log(err)
            }
        })
    }
});


module.exports = router;

