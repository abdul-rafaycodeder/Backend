// index.js server ko start karta hai
import app from "./src/app";

app.get("/", (req, res)=> {
    console.log('chal raha hai')
})

app.listen("3000", (req, res) =>{
    console.log("Server is running on port 3000");
})