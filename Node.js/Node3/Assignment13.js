const Sequelize = require("sequelize");
const dbConfig = require("./db.config");

// Sequelize object is created with DB Parameters
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

//Connects to the Database and Checks whether Everything is fine or not
sequelize
  .authenticate()
  .then(() => {
    console.log("Successfully Connected with the Database");
  })
  .catch((err) => {
    console.log("Unable to Connect with the Database");
  });

let studentSequelize = sequelize.define("Student", {
  Student_ID: Sequelize.INTEGER,
  Student_Name: Sequelize.STRING,
  Student_Stream: Sequelize.STRING,
  Student_Marks: Sequelize.INTEGER,
});

studentSequelize
  .sync()
  .then(() => {
    console.log("Sync with table is done");
  })
  .catch((err) => {
    console.log("Error While Syncing with table");
  });

/* studentSequelize.bulkCreate([{
    Student_ID:101,
    Student_Name:"Sujit",
    Student_Stream:"CSE",
    Student_Marks:524
},
{
    Student_ID:102,
    Student_Name:"Anjali",
    Student_Stream:"CSE",
    Student_Marks:580
}]).then((data)=>{
    console.log("Records Inserted Successfully");
}).catch((err)=>{
    console.log("Unable to Insert Record: "+err);
}) */

const Op = Sequelize.Op;
studentSequelize
  .findAll({ where: { Student_Marks: { [Op.gte]: 550 } }, raw: true })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Unable to Fetch Data, " + err);
  });
