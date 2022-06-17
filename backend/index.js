const dotenv =require("dotenv");
dotenv.config();
const express =require("express");
const cors =require("cors");

const connectDB= require("./configs/db")
const  userRoutes = require("./routes/router.post");

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

// CORS Policy
app.use(cors())

// JSON
app.use(express.json())

// Load Routes

app.use("/api/user", userRoutes)

app.listen(process.env.PORT || port, () => {
    // Database Connection
    connectDB(DATABASE_URL)
    console.log(`Server listening at http://localhost:${port}`)
})