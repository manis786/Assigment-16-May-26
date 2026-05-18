import express, { Router } from "express"
import Todos from "../models/todos.models.js"
import { addTodos, getAllTodos, getTodobyId ,updateTodobyId } from "../controllers/todo.controller.js"

const router = express.Router()
router
  .route("/")
  .get(getAllTodos)
  .post(addTodos)
router
.route("/:todoId")
.get(getTodobyId)
.put(updateTodobyId)


export default router