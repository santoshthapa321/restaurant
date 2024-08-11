import mongoose from "mongoose";

const dbConnection = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: "new-restaurant", // Use a valid database name
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Connected to Database");
    })
    .catch(err => {
      console.error(`Error connecting to the database: ${err.message}`);
    });
};

export default dbConnection; // Ensure the default export is used
