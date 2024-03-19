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
app.get("/contact", (req,res)=>{
    res.render("contact.ejs"); 
})


app.post("/contact", (req,res)=>{
    const name = req.body["Fname"];
    const surname = req.body["LastName"];
    const email = req.body["exampleInputEmail1"];
    const message = req.body["textarea"];
    console.log(name, surname, email, message);
    res.render("contact.ejs",{name, surname, email, message});
});







app.listen(port, ()=>{
    console.log(`server is runing on ${port}`);
});