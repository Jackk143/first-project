import express from"express";
import dotenv from "dotenv";
import productRoutes from "./routes/product.route.js";
import cors from "cors";
import{connectDB} from './config/db.js';


dotenv.config()
const app=express();
app.use(express.json());//allows us to accept JSON data in the req.body middleware

app.use("/api/product",productRoutes);
app.use(cors());


  
 
connectDB();
app.listen(5000,()=>{
    
    console.log("Server started at http://localhost:5000");
});
