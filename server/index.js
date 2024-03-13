import express from "express"; // Importing express from express
import connectToMongo from "./config/db.js";
import router from "./routes/blog.js"; "./blog.js";

const app = express(); // Creating an instance of express
const port = 9000; // Defining port

connectToMongo();

app.get("/", (req, res) => {
  res.send("API is running..");
});

// API Router
app.use("/api/v1/", router);

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`); // Use backticks for template literals
});
