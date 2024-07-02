import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import env from "dotenv";


const app = express();
const port = 3000;
env.config();

const config = {
    method: 'get',
    url: 'https://v3.football.api-sports.io/standings?league=140&season=2023',
    headers: {
      'x-rapidapi-key': process.env.API_PASSWORD, 
      'x-rapidapi-host': process.env.RAPID_HOST
    }
  };
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

app.get("/premierLeague", (req,res)=>{
    res.render("partials/ligi/Premier League/premierLeague.ejs")
})


app.get("/laliga", async (req, res) => {
    try {const response = await axios(config);
        const result = response.data;
        console.log(JSON.stringify(result));
        res.render("partials/ligi/LaLiga/laLiga.ejs", { data: result });
      } catch (error) {
        console.error("Failed to make request:", error.message);
      }     
});

app.get("/bundesliga", (req,res)=>{
    res.render("partials/ligi/Bundesliga/bundesliga.ejs")
})

app.get("/serieA", (req,res)=>{
    res.render("partials/ligi/Serie A/serieA.ejs")
})

app.get("/ligue1", (req,res)=>{
    res.render("partials/ligi/Ligue 1/ligue1.ejs")
})

app.get("/ekstraklasa", (req,res)=>{
    res.render("partials/ligi/Ekstraklasa/ekstraklasa.ejs")
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