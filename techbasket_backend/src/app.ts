import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();


app.use(cors({
    origin:true,
    credentials:true
}));

app.use(express.json());

app.use(cookieParser());


app.get("/",(req,res)=>{
    res.send("Backend Running Successfully");
});


export default app;