const express = require("express")
const DBconnect = require("./DBconfig")
const taskRoute = require("./routes/taskRoute.js")
const app= express()
app.use(express.json())
DBconnect()
app.listen(1011,()=>{
    console.log("server is running ");
})

app.use("/test",taskRoute)