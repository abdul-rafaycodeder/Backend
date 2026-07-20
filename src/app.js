// app.js server ko create karta hai
import express from "express";
const app = express();
app.use(express.json())

const notes = []

// POST /notes
app.post("/notes", (req, res) => {
    notes.push(req.body)

    res.status(201).json({
        message: "note created successfull"
    })
})


// GET /notes
app.get("/notes", (req, res) => {
    res.status(200).json({
        message: "notes fatch successfully",
        notes: notes
    })
})

// DELETE /note/:index
app.delete("/notes/:index", (req, res) => {
    const index = req.params.index

    delete notes[ index ]

    res.status(200).json({
        message: "note deleted successfully"
    })
})

app.patch("/notes/:index", (req, res)=>{
    const index = req.params.index
    const discription = req.body.description

    notes [ index ].discription = discription

    res.status(200).json({
        message: "notes updated successfully"
    })  
})



export default app