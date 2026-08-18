import dotenv from 'dotenv'

import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'

dotenv.config()

let server: Server
const port = Number(process.env.PORT) || 5000

const mongodbUri = process.env.MONGODB_URL as string

const startServer = async () => {
    try {
        await mongoose.connect(mongodbUri)
        console.log('Connected to MongoDB')

        server = app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()

