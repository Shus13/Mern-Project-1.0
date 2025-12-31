 const app = require("express")()

 app.get("/", (req,res)=>{
    // res.send("<h1>Hello, I'm Home Page</h1>")

    res.json({
        message : "I am Home Page"
    })
 })

 app.get("/contact", (req, res)=> {
    res.send("Hello, I'm Contact Page")
 })

 app.get("/about",(req,res) => {
    res.send("Hello, I'm About Page")
 })

 app.listen(3000,(req,res)=>{
    console.log("Modejs has started at port 3000")
 })