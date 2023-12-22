const mongoose = require("mongoose")

const tasksSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    finished:{
        type:Boolean,
        default :false
    }
})

const taskModel = mongoose.model("dailytaskasapp",tasksSchema)
module.exports = taskModel