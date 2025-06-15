import mongoose from "mongoose";

// Connect to MongoDB

const connectDB = async () => {
  try {
    // Show message when connected

    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );

    // Connect using the MongoDB URI and database name
    await mongoose.connect(`${process.env.MONGODB_URI}/QuickBlog`);
  } catch (error) {
    // Show error if connection fails
    console.log(error.message);
  }
};

export default connectDB;
