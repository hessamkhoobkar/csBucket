import mongoose from "mongoose";
const dotenv = require("dotenv").config();

const uri =
  process.env.MONGO_DB_URL +
  "todoaddict?retryWrites=true&w=majority&appName=Cluster0";

// const clientOptions = {
//   serverApi: { version: "1", strict: true, deprecationErrors: true },
// };

export default async function connectDB() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    // await mongoose.connect(uri, clientOptions);
    await mongoose.connect(uri);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
