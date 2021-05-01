const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Number,
        default:Date.now
        
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter your exercise name"
            },
            duration: {
                type: Number,
                required: "Enter your exercise duration in minutes"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
},
{
    toJSON: {
    
      virtuals: true
    }
  }
);


