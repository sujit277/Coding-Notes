var express = require("express");
var Sequelize = require("sequelize");
var db = require("./db.config");
var cors = require("cors");

var app = express();
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(db.DB, db.USER, db.PASSWORD, {
    host: db.HOST,
    dialect: db.dialect,
    pool: {
        max: db.pool.max,
        min: db.pool.min,
        acquire: db.pool.acquire,
        idle: db.pool.idle
    }
});

let employeeTable = sequelize.define('employee', {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    emailId: {
        primaryKey: true,
        type: Sequelize.STRING
    },
    designation: Sequelize.STRING,
    mobileNo: Sequelize.STRING
}, {
    timestamps: false,
    freezeTableName: true
});

employeeTable.sync().then(() => {
    console.log("Synced with Employee Table");
}).catch((err) => {
    console.log("Unable to Sync with Employee Table " + err);
})


app.get("/getAllEmployees", (req, res) => {
    employeeTable.findAll({ raw: true }).then((data) => {
        res.send(data);
    }).catch((err) => {
        strErr = ("Error while Fetching Details from Employee Table " + err);
        res.send(strErr);
    })
})

app.post("/insertEmployee", (req, res) => {
    firstName = req.body.firstName;
    lastName = req.body.lastName;
    emailId = req.body.emailId;
    designation = req.body.designation;
    mobileNo = req.body.mobileNo;

    let EmpOj = employeeTable.build({ firstName: firstName, lastName: lastName, emailId: emailId, designation: designation, mobileNo: mobileNo });
    EmpOj.save().then(() => {
        strResult = "Record Inserted Succesfully";
        res.send(strResult);
    }).catch((err) => {
        strErr = ("Unable to Insert Record" + err);
        res.send(strErr);
    })
})

app.delete("/deleteEmployee/:emailId", (req, res) => {
    var emailId = req.params.emailId;
    employeeTable.destroy({ where: { emailId: emailId } }).then(() => {
        strResult = "Record Deleted Successfully";
        res.send(strResult);
    }).catch((err) => {
        strErr = ("Unable to Delete the Record " + err);
        res.send(strErr);
    })
})

app.put("/updateEmployee/:email", (req, res) => {
    email = req.params.email;
    firstName = req.body.firstName;
    lastName = req.body.lastName;
    emailId = req.body.emailId;
    designation = req.body.designation;
    mobileNo = req.body.mobileNo;

    employeeTable.update(
        { firstName: firstName, lastName: lastName, emailId: emailId, designation: designation, mobileNo: mobileNo },
        { where: { emailId: email } }
    ).then(() => {
        strResult = "Record Updated Successfully";
        res.send(strResult);
    }).catch((err) => {
        strErr = ("Unable to Upadate Record" + err);
        res.send(strErr);
    })
})

app.listen(5000, () => {
    console.log("Server Started at Port 5000");
})