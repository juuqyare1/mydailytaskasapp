const express = require("express")
const taskModel = require("../models/taskModel.js")
const taskRoute = express.Router()

taskRoute.get("/",async(req,res)=>{
    const tasklist = await taskModel.find()
    res.status(200).json(tasklist)
})

taskRoute.post("/",async(req,res)=>{
    const newtask = new taskModel(req.body)
    await newtask.save()
    res.status(201).json("tasks was added")
})

taskRoute.put("/:id",async(req,res)=>{
    const {id}=req.params
    const updtask = await taskModel.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).json({status:"task wa updated",updtask})
})
taskRoute.delete("/:id",async(req,res)=>{
    const {id}=req.params
    const deltask = await taskModel.findByIdAndDelete(id)
    res.status(200).json({status:"task was deleted"})
})

module.exports= taskRoute