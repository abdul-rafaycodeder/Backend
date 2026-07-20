// app.js server ko create karta hai
import express from "express";
const app = express();


// const notes = []

app.get("/data", (req, res) => {
    res.send("Hello, World!")
})


export default app