import app from "./app.js";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables from a .env file
dotenv.config();

// Configure CORS to allow requests from your Vercel app
const corsOptions = {
  origin: 'https://restaurant-one-iota.vercel.app', // Your Vercel app's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
};

// Use CORS middleware in your Express app
app.use(cors(corsOptions));

// Handle preflight OPTIONS requests
app.options('*', cors(corsOptions));

// Start the server and listen on the specified port
app.listen(process.env.PORT, () => {
  console.log(`Server Running on port ${process.env.PORT}`);
});
