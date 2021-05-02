const router = require("express").Router();
const Workout = require("../models/workout.js");


router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
  
    })
});

router.get("/api/workouts/:id", (req, res) => {

    const { id } = req.params;
    Workout.findOne({
        _id: id,
    }).then(dbWorkout => {
        res.json(dbWorkout);
    })
        .catch(err => {
            res.status(400).json
        })

});

router.put("/api/workouts/:id", ({ body, params }, res) => {

    const id = params.id;
    let savedExercises = [];

    Workout.find({ _id: id })
        .then(dbWorkout => {
            savedExercises = dbWorkout[0].exercises;
            res.json(savedExercises);
            let allExercises = [...savedExercises, body];
            updateWorkout(allExercises);
        })
        .catch(err => {
            res.json(err);
        });

    });

    router.get("/api/workouts/range", (req, res) => {
        Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
      
        })
    
    });
    module.exports = router;