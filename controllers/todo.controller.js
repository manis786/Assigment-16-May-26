import { errorRes, successRes } from "../libs/responseHandler.js";
import Todos from "../models/todos.models.js";

// Get All Todos Method


const getAllTodos = async (req, res) => {
    try {
        const todos = await Todos.find()
        successRes(res, 200, true, "Todos Fetched", todos)

        console.log("Todos Fetched")
    } catch (error) {
        errorRes(res, 400, false, error.message || "Something went wrong, please try later!", null)

    }
}

// Add Todos Method
const addTodos = async (req, res) => {
    try {
        const respone = await Todos.create(req.body)

        console.log(`New Todo Created ${req.body}`)
        res.status(200).json({
            status: true,
            message: "New Line Added in Todos",
            data: null
        })
    } catch (error) {
        console.log(`Error While Adding Todo ${error}`)
        res.status(400).json({
            status: false,
            message: "Error While Adding New Line",
            data: todos
        })
    }
}
// Get Todos by ID Method
const getTodobyId = async (req, res) => {
    try {
        const { todoId } = req.params
        const todoData = await Todos.findById(todoId)
        console.log(`Data Feteched Successfully`)
        if (!todoData) {
            res.status(400).json({
                status: false,
                message: "Error While Getting Todo by ID",
                data: null

            })
        }

        successRes(res, 200, true, "All Todos are Fetched Successfully")

        console.log("Parameter", todoId);
    } catch (error) {
        console.log(`Error While Gettinf Data by ID ${error}`);

        res.status(400).json({
            status: false,
            message: "Error While Getting Todo by ID",
            data: null

        })

    }
}
// Update Todos by ID

const updateTodobyId = async (req, res) => {
    try {
        const { todoId } = req.params
        const { title, description } = req.body;
        if (!title || !description) {
            res.status(400).json({
                status: false,
                message: "Error While Updating your Request",
                data: null
            })
        }
        const updateTodo = await Todos.findByIdAndUpdate(todoId, {
            title,
            description
        }, { new: true })
        res.status(200).json({
            status: true,
            message: "Data Updated Successfully",
            data: updateTodo
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Error While Updating your Request",
            data: null
        })
    }
}
// Delete Todos by ID
const deleteTodobyId = async (req, res) => {
    try {
        const { todoId } = req.params
        const response = await Todos.findByIdAndDelete(todoId)

        res.status(200).json({
            status: true,
            message: "Todos Deleted Successfully",
            data: null
        })


    } catch (error) {
        console.log(`Error While Deleting your Data ${error}`);
        res.status(400).json({
            status: false,
            message: "Error While Deleting Data",
            data: null
        })
    }
}
export { getAllTodos, addTodos, getTodobyId, updateTodobyId, deleteTodobyId }