const express = require("express")
const DBconnect = require("./DBconfig")
const taskRoute = require("./routes/taskRoute")
const app= express()
app.use(express.json())
DBconnect()
app.listen(1010,()=>{
    console.log("server is running ");
})

app.use("/tasks",taskRoute)