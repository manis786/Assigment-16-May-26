import { generateOtp } from "../libs/generateOTP.js"
import { errorRes, successRes } from "../libs/responseHandler.js"
import Users from "../models/users.models.js"

import bcrypt from "bcryptjs"
const registerUser = async (req , res) =>{
    try {
        const {userName , email , password} = req.body

        const salt = await bcrypt.genSalt(8)
        const OTP = generateOtp()

        const hashedPass = await bcrypt.hash(password , salt)
        
        const newUser = Users.create({
            userName,
            email,
            password:hashedPass,
            otp: OTP
        })

        console.log("OTP === > ", OTP);
        
    } catch (error) {
        throw new console.error();
        
    }
}
export {registerUser}