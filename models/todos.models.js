import mongoose from "mongoose"
const todoSchema = new mongoose.Schema({
    title :{
        type: "string"
    },
    description :{
        type : "string"
    }
})
const Todos = mongoose.model("Todos",todoSchema)
export default Todos