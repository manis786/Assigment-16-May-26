import express from "express"
import Todos from "../models/todos.models.js"

const router = express.Router()
router.get("/", async (req,res)=>{
    try {
        const todos = await Todos.find()
        console.log(`Todos ==>> ${todos}`)
        res.status(200).json({
            status:true,
            message:"Todos Fetched Successfully",
            data:todos
        })
    } catch (error) {
        console.log(`Error ${error}`)
    }

})
router.post("/",async (req,res)=>{
    try {
        console.log("Create Todos =>",req.body)
        const response = await Todos.create(req.body)

        res.status(200).json({
            status : true,
            message: "Todo Created Successfully",
            data : null
        })
    } catch (error) {
        console.log(`Error Occured While Creating Todo ${error}`)
    }
})
export default router