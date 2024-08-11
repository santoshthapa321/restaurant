import app from "./app.js";
import dotenv from "dotenv";

// Load environment variables from a .env file
dotenv.config();

// Start the server and listen on the specified port
app.listen(process.env.PORT, () => {
  console.log(`Server Running on port ${process.env.PORT}`);
});
