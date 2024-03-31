const express = require("express");
const mysql = require('mysql');

const dbCon = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "bepts"
    }
)

module.exports = dbCon;