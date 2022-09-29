import mongoose from "mongoose";
import validator from "validator";

const studentSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        minlength:3
    },
    Class:{
        type:Number,
        required:true,
        unique:[true,"Email ID is Already Present"]

    },
    Rollno:{
        type:Number,
        required:true,
        unique:[true,"Rollno is Aklready Present"]
    },
    Subject:{
        type:String,
        required:true

    }
})

//we will create a new Collection
const studentrecord = new mongoose.model('studentrecord',studentSchema);
export {studentrecord};