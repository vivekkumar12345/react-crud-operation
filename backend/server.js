const express = require("express");
const mysql = require('mysql');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bepts",
})

app.post("/login", (req, resp) =>{
    const sql = "SELECT * from user where email = ? and password = ?";
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) return resp.json(err);
        if(data.length > 0) {
            return resp.json("Login Successful");
        }
        else {
            return resp.json("User not Found");
        }

    })
})


app.get("/memberdata", (req, resp) => {
    const sql = "SELECT * from user order by user_id DESC";
    db.query(sql, (err, data) =>{
        if (err) return resp.json(err);
        return resp.json(data);
    })
})

app.post("/addmember", (req, resp) =>{
    const sl = "SELECT * from user where email = ? or mem_id = ? ";
    db.query(sl, [req.body.formdata.email, req.body.formdata.memberID], (err, data) => {
        if(err) if(err) return resp.json("Unable to Regsiter Please try again");
        if(data.length > 0){
            resp.json("User Already Exist");
        }
        else{
            const sql = "INSERT into user (mem_id, dob, name, email, ph_no, password, user_type) VALUES (?, ?, ?, ?, ?, ?, ?)";
            db.query(sql, [req.body.formdata.memberID, req.body.formdata.dob, 
                req.body.formdata.name, req.body.formdata.email, req.body.formdata.mob, 
                req.body.formdata.password, req.body.formdata.userType], (err, data) => {
                    if(err) return resp.json("Unable to Regsiter Please try again");
                    return resp.json("Successfully Registered Member");
                })
        }
    })
    
})


app.post("/deletemember", (req, resp) =>{
    const sql = "DELETE from user where user_id = ?";
    db.query(sql, req.body.ids, (err, data) =>{
        if(err) return resp.json(`Unable to Delete Member ID ${req.body.ids}`);
        return resp.json(`successfully deleted Member ID  ${req.body.ids}`);
    })
})



app.post("/editmember", (req, resp) => {
    const sql = "UPDATE user set mem_id = ?, dob = ?, name = ?, email = ?, ph_no = ?, password=?, user_type = ? where user_id = ? ";
    db.query(sql, [req.body.formdata.memberID, req.body.formdata.dob, 
        req.body.formdata.name, req.body.formdata.email, req.body.formdata.mob, 
        req.body.formdata.userType, req.body.formdata.password, req.body.formdata.vivek], (err, data) => {
            if(err) return resp.json(err);
            return resp.json("Success");
        })
})  
app.listen(8081, () =>{
    console.log("listening");
})