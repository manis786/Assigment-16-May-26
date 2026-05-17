import dotenv from "dotenv"
import { DEFAULT_CIPHERS } from "node:tls"

dotenv.config()

const config = {
    PORT : process.env.PORT ,
    MONGODB_URI : process.env.MONGODB_URI
}
export default config