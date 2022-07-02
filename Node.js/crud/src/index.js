import express from "express";
import ("./db/conn.js");
import {studentrecord} from "./models/student.js"
const app = express();

app.use(express.json());
const port = 8000;


/* app.post("/student",(req,res)=>{
    res.send("Hello from the Sujit Side");
}); */

//Creating a New Student record
app.post("/student",(req, res)=>{
    console.log(req.body);
    const user = new studentrecord(req.body);
    user.save().then(()=>{
        res.send(user);
    }).catch((err)=>{ 
        res.send(err);

    })
});



//Getting Records from the Database

/*app.get("/student/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const studentData = await studentrecord.findById(_id);

        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }
    }catch(err){
        res.send(err);
    }
});*/

//Deleting the Records from the Database

/*app.delete("/student/:id",async(req,res)=>{
    try{
        const deletestudent = await studentrecord.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();

        }
        res.send(deletestudent);
    }catch(err){
        res.status(500).send(err);
    }
})*/

//Updating the Records

/* app.patch("/student/:id" , async(req,res)=>{
    try{
        const _id = req.params.id;
        const updatestudent = await studentrecord.findByIdAndUpdate(_id,req.body);
        res.send(updatestudent)
    }catch(err){
        res.status(404).send(updatestudent)
    }
}); */


app.listen(8000,()=>{
    console.log("The Server is Running On Port Number 8000")
})