import express from "express";
import "./db/conn.js";
import { studentrecord } from "./models/student.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Student Managment System");
});

//Creating a New Student record

/* app.post("/student", async (req, res) => {
    try {
        const user = new studentrecord(req.body);
        const users = await user.save();
        res.send(users);
    } catch (err) {
        console.log(err);
    }
}); */


//Getting Records from the Database

/* app.get("/student/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const studentData = await studentrecord.findById(id);

        if (!studentData) {
            return res.status(404).send();
        } else {
            res.send(studentData);
        }
    } catch (err) {
        res.send(err);
    }
}); */


//Deleting the Records from the Database

/* app.delete("/student/:id", async (req, res) => {
    try {
        if (!req.params.id) {
            return +res.status(400).send();
        }
        const deletestudent = await studentrecord.findByIdAndDelete(req.params.id);
        res.send(deletestudent);
    } catch (err) {
        res.status(500).send(err);
    }
}) */

//Updating the Records

app.patch("/student/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatestudent = await studentrecord.findByIdAndUpdate(id, req.body);
        res.send(updatestudent)
    } catch (err) {
        res.status(500).send(err)
    }
});


app.listen(8000, () => {
    console.log("The Server is Running On Port Number 8000")
})