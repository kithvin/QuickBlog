import mongoose from "mongoose";

// Define schema for comments
const commentSchema = new mongoose.Schema(
  {
    blog: { type: mongoose.Schema.Types.ObjectId, // Reference to a blog
      ref: "blog", // Refers to 'blog' collection
      required: true },

    name: {type : String, required:true}, // Name of the commenter
    content:{type : String, required:true}, // Comment text
    isApproved:{type:Boolean, default:false} // Admin approval status
  },
  { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

// Create Comment model
const Comment = mongoose.model("Comment", commentSchema);

export default Comment; // Export the model
