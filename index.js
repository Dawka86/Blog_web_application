import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.render("index.ejs");
})
app.get("/about",(req, res)=>{
    res.render("about.ejs");
})
app.get("/blog", (req,res)=>{
    res.render("blog.ejs");
})


app.post("/blog/submit", (req,res)=>{
    const name = req.body["Fname"];
    const surname = req.body["LastName"];
    const email = req.body["exampleInputEmail1"];
    const massage = req.body["textarea"];
    
    console.log(name);
    console.log(surname);
    console.log(email);
    console.log(massage);

})







app.listen(port, ()=>{
    console.log(`server is runing on ${port}`);
});