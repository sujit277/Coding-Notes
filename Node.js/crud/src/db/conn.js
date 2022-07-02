import mongoose from  "mongoose";

mongoose.connect("mongodb://localhost:27017/student",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection is Successful");
}).catch((err)=>{
    console.log("No Connection");

})