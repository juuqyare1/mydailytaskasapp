const express = require("express")
const taskModel = require("../models/taskModel")
const taskRoute = express.Router()

taskRoute.get("/",async(req,res)=>{
    const tasklist = await taskModel.find()
    res.json(tasklist)
})

taskRoute.post("/",async(req,res)=>{
    const newtask = new taskModel(req.body)
    await newtask.save()
    res.json("tasks was added")
})

taskRoute.put("/:id",async(req,res)=>{
    const {id}=req.params
    const updtask = await taskModel.findByIdAndUpdate(id,req.body,{new:true})
    res.json({status:"task wa updated",updtask})
})
taskRoute.delete("/:id",async(req,res)=>{
    const {id}=req.params
    const deltask = await taskModel.findByIdAndDelete(id)
    res.json({status:"task was deleted"})
})

module.exports= taskRoute