const express = require("express")
const taskModel = require("../models/taskModel.js")
const taskRoute = express.Router()

taskRoute.get("/",async(req,res)=>{
    const tasklist = await taskModel.find()
    res.status(200).json(tasklist)
})

taskRoute.post("/",async(req,res)=>{
    const {title , date , finished }=(req.body)
    const newtask = new taskModel({
        
        title , date , finished
    })
    const task = newtask.save();
    res.status(201).json(task)
})

taskRoute.put("/:id",async(req,res)=>{
    const {title , date , finished }=(req.body)
   const task = await taskModel.findByIdAndUpdate(req.params.id)
   if (task) {
    task.title = title
    task.date = date
    task.finished =finished
    const updatedtask = await task.save();
    res.status(200).json(updatedtask)
   }

    res.status(200).json({status:"task wa updated",updtask})
})
taskRoute.delete("/:id",async(req,res)=>{
    const {id}=req.params
    const deltask = await taskModel.findByIdAndDelete(id)
    res.status(200).json({status:"task was deleted"})
})

module.exports= taskRoute