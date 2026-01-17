const express = require("express");
const app = express();
const { connectDatabase } = require("./database/database");
const Blog = require("./model/blogModel");
app.use(express.json());
connectDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.send("<h1>Hello, I'm Home Page</h1>")

  res.json({
    message: "I am Home Page",
    status: "200 OK",
  });
});

// Get API blogs (All Blogs)
app.get("/blogs", async (req, res) => {
  const blogs = await Blog.find();

  if (blogs.length == 0) {
    res.status(200).json({
      // status: 200,
      message: "Empty Blogs",
    });
  } else {
    //  res.send("Hello, I'm Services Page")
    res.status(404).json({
      message: "Blogs fetched successfully",
      // status: 404,
      data: blogs,
    });
  }
});

// Get API /blogs/:id (Single Blogs)
app.get("/blogs/:id", async (req, res) => {
  const id = req.params.id;
  // const blog = await Blog.find({ _id: id });

  // if (blog.length == 0) {
  //   res.status(200).json({
  //     message: "No blogs found with this id",
  //   });
  // } else {
  //   res.status(200).json({
  //     message: "Blog fetched sucessfully",
  //     data: blog,
  //   });
  // }

  const blog = await Blog.findById(id)
  if(blog){
    res.status(200).json({
      message: "Blog fetched sucessfully",
      data: blog
    })
  }else{
    res.status(404).json({
      message: "No Blogs found"
    })
  }


  
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
  const title = req.body.title;
  const subtitle = req.body.subtitle;
  const description = req.body.description;

  // Insert into Database
  await Blog.create({
    title: title,
    subtitle: subtitle,
    description: description,
  });

  res.json({
    status: 200,
    message: "Blog created successfully",
  });
});

// Update Blog API
app.patch("/blogs/:id", async (req,res) => {
  const id = req.params.id
  const title = req.params.title
  const subtitle = req.params.subtitle
  const description = req.params.description

  // to check if the blogs with id exist or not

  const isBlogFound = await Blog.find({
    id : id
  })

  if(isBlogFound.length == 0) {
    res.json({
      message : "No Blog"
    })   
  }

  await Blog.findByIdAndUpdate(id,{
    title : title,
    subtitle : subtitle,
    description : description
  })

  res.status(200).json({
    message : "Blog updated successfully"
  })
})

// Delete Blog API
app.delete("/blogs/:id", async (req,res) => {
  const id = req.param.id

  await Blog.findByIdAndDelete(id)

  res.status(200).json({
    message : "Blog deleted successfully"
  })
})


app.listen(3000, (req, res) => {
  console.log("NodeJs has started at port 3000");
});
