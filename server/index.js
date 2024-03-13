import express from "express"; //importing express from express
import connectToMongo from "./config/db.js";
const app = express();         //creating instance of express
const port = 9000;               //defining port

connectToMongo();

app.get("/", (req, res) => {
    res.send("API is runnning..");
  });
  app.listen(port, () => {
    console.log('API is running on http://localhost:$(port) '); //creates a simple web server 
  });  //This line starts the server and tells it to listen for incoming requests on the specified port
    

  


