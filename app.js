const express = require("express");
const app = express();
const { connectDatabase } = require("./database/database");
const Blog = require("./model/blogModel");
app.use(express.json());
connectDatabase();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  // res.send("<h1>Hello, I'm Home Page</h1>")

  res.json({
    message: "I am Home Page",
    status: "200 OK",
  });
});

app.get("/services", (req, res) => {
  //  res.send("Hello, I'm Services Page")
  res.json({
    message: "I'm Services Page",
  });
});

app.get("/contact", (req, res) => {
  //  res.send("Hello, I'm Contact Page")

  res.json({
    message: "I'm Contact Page",
  });
});

app.get("/about", (req, res) => {
  //  res.send("Hello, I'm About Page")

  res.json({
    message: "I'm About Page",
  });
});

app.post("/login", (req, res) => {
  console.log("Login Request Received");
  res.json({
    message: "Login Request Successful",
  });
  //  res.send("Hello, I'm Login Page")
});

//  Create Blog API

app.post("/createBlog", async (req, res) => {
   const title = req.body.title
   const subtitle = req.body.subtitle
   const description = req.body.description

  // Insert into Database
  await Blog.create({
    title: title,
    subtitle: subtitle,
    description: description
  });

  res.json({
    status: 200,
    message: "Blog created successfully",
  });
});

app.listen(3000, (req, res) => {
  console.log("NodeJs has started at port 3000");
});
