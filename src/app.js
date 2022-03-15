import express from "express";
import cors from "cors"
import morgan from "morgan";
import mongoose from "mongoose";

//import router
import productRouter from "../routers/product"
import postRouter from "../routers/post"
import userRouter from "../routers/user"


const app = express();

//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

//route
app.use(productRouter);
app.use(postRouter);
app.use(userRouter)

//connection database
mongoose.connect('mongodb://localhost:27017/we16309')
    .then(() => console.log("Kết nối DB thành công"))
    .catch((error) => console.log(error));

//connection
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
}) 