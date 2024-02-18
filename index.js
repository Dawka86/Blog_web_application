import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index.ejs");
})
app.get("/about",(req, res)=>{
    res.render("about.ejs");
})
app.get("/blog", (req,res)=>{
    res.render("blog.ejs");
})





app.listen(port, ()=>{
    console.log(`server is runing on ${port}`);
});