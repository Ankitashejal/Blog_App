import express from "express"; //importing express from express
const app = express();         //creating instance of express
const PORT = 9000;               //defining port

app.get("/", (req, res) => {
    res.send("API is runnning..");
  });
  app.listen(PORT, () => {
    console.log('API is running on http://localhost:$(PORT)'); //creates a simple web server 
  });  //This line starts the server and tells it to listen for incoming requests on the specified port
    

  


