// app.js server ko create karta hai
import express from "express";
const app = express();


app.use(express.json())

const notes = []

console.log(notes,"this is array")


app.post("/notes", (req, res) => {
    notes.push(req.body)

    res.status(201).json({
        message: "note created successfull"
    })
})

app.get("/notes", (req,res)=>{
    res.status(200).json({
        message: "notes fatch successfully",
        notes : notes
    })
})


export default app