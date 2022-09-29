import mongoose from "mongoose";

/* Creating conncetion with Mongodb */
mongoose.connect("mongodb://localhost:27017/student",{useNewUrlParser: true , useUnifiedTopology: true })
.then(()=> console.log("Connection Sucessful"))
.catch((err)=> console.log(err));


/* Schema
A Mongoose Schema defines the Structure of the document
default values, Validator Etc */

const playlistSchema = new mongoose.Schema({
    Name:String,
    Class:Number,
    Rollno:Number,
    Subject:String,
})


/* A Mongoose Model is a Warapper on the Mongoose Schema
A mongoose Schema Defines the structure of the document
Default values Validator */


/* Mongoose Model Provides an interface to the database for Querying 
,Creating, Updating ,Delete */


//Collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

//Create Document or Insert

/*const createDocument = async()=>{
    try{
        const reactPlaylist = new Playlist({
            Name:"Simran",
            Class:4,
            Rollno:125,
            Subject:"Social",
        })

        const backPlaylist = new Playlist({
            Name:"Chandani",
            Class:3,
            Rollno:126,
            Subject:"Science",
        })

        const fullPlaylist = new Playlist({
            Name:"PujaDi",
            Class:6,
            Rollno:127,
            Subject:"Graphs",
        })
        const result = await Playlist.insertMany([reactPlaylist,backPlaylist,fullPlaylist]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}*/
//createDocument();

//Reading From the database

/*
const getDocument = async()=>{
    try{
        const result = await Playlist.find()
        .select({name:1})
        .limit(3);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
getDocument();*/


//Appling the Relational Operator

/*const getDocument = async()=>{
    try{
        const result = await Playlist
        .find({Rollno:{$gt:125}})
        .select({name:1})
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
getDocument();*/



//Appling the LogicalQuery Operator

/*const getDocument = async()=>{
    try{
        const result = await Playlist
        .find({$or:[{Rollno:125},{Rollno:127}]})
        .select({"Name":1})
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
getDocument();*/


//Counting and Sorting the Records

/*const getDocument = async()=>{
    try{
        const result = await Playlist
        .find({$or:[{Rollno:125},{Rollno:127}]})
        .select({"Name":1})
        .sort({"Name":1});
        //.countDocuments();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
getDocument();*/


//Update the Record 

/*const updatetDocument = async(_id)=>{
    try{
        const result = await Playlist.updateOne({_id},{$set:{Name:"Priya"}});
        console.log(result);
    }catch(err){
        console.log(err);
    }
};
updatetDocument("603ce7a7dcdfeb02e8b24382");*/


//Delete the Record 

/*const updatetDocument = async(_id)=>{
    try{
        const result = await Playlist.findByIdAndDelete({_id});
        console.log(result);
    }catch(err){
        console.log(err);
    }
};
updatetDocument("603ce7a7dcdfeb02e8b24382");*/

