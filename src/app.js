// app.js server ko create karta hai
import express from "express";
const app = express();


const notes = []

app.post("/notes", (req, res)=>{

    res.send("Notes added successfully")
    

})

export default app