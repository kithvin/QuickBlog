import mongoose from "mongoose";

// Define schema for Blog
const blogSchema = new mongoose.Schema({

    title:{type:String, required:true}, // Blog title
    subTitle:{type:String}, // Optional subtitle
    description:{type:String, required:true}, // Blog content/description
    category:{type:String, required:true}, // Blog category
    image:{type:String, required:true}, // Image URL
    isPublished:{type:Boolean, required:true}, // Publish status (true/false)

},{timestamps: true}); // Adds createdAt and updatedAt

// Create Blog model
const Blog = mongoose.model('blog',blogSchema);

export default Blog;// Export the model