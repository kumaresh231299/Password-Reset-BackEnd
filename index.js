import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./Database/config.js";
import userRoute from "./Routers/userRoute.js"

dotenv.config();

const app = express()

//middleware
app.use(express.json())
app.use(cors({
    origin: "*",
    credentials: true
}))

//DB Connection
connectDB();
//Default Router
app.get("/", (req, res) => {
    res.status(200).send("Hi, Welcome to Our App!")
})

//API Routes
app.use('/api/user',userRoute);

//Listen
app.listen(process.env.PORT, () => {
    console.log("App is started and running on the port")
})