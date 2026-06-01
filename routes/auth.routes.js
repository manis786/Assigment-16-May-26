import express from "express"
import { registerUser } from "../controllers/users.controller.js"


const router = express.Router()

// SignUp / Register

router.route("/register").post(registerUser)

// Login

router.route("/login").post()

export default router