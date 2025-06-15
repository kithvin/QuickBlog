import express from "express";
import {
  addBlog,
  addComment,
  deleteBlogById,
  generateContent,
  getAllBlogs,
  getBlogById,
  getBlogComment,
  togglePublish,
} from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter = express.Router();

// Add a new blog with image upload, protected route
blogRouter.post("/add", upload.single("image"), auth, addBlog);

// Get all published blogs (public route)
blogRouter.get("/all", getAllBlogs);

// Get a blog by its ID (public route)
blogRouter.get("/:blogId", getBlogById);

// Delete a blog by ID (protected route)
blogRouter.post("/delete", auth, deleteBlogById);

// Toggle blog publish status (protected route)
blogRouter.post("/toggle-publish", auth, togglePublish);

// Add a comment to a blog (public route)
blogRouter.post("/add-comment", addComment);

// Get approved comments for a blog (public route)
blogRouter.post("/comment", getBlogComment);

// Generate blog content using AI (protected route)
blogRouter.post("/generate", auth, generateContent);

export default blogRouter;
