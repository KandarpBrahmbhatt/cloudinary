import express from "express"
import connectDB from "./db/db.js"
import cors from 'cors'
import dotenv from "dotenv"
import bodyParser from "body-parser"
import ImageRoute from "./Routes/image.routes.js"
dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/images', ImageRoute)
const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is Started ${port}`)
    connectDB()
})

