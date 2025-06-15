import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";
import main from "../configs/gemini.js";

// Add a new blog
export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;

    // Check if all fields are present
    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: "Missing required fields" });
    }
    // Read the uploaded image file
    const fileBuffer = fs.readFileSync(imageFile.path);

     // Upload image to ImageKit
    const responce = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs", // Save in 'blogs' folder
    });

    // Optimize image using transformations
    const optimizedImageURL = imagekit.url({
      path: responce.filePath,
      transformation: [
        { quality: "auto" }, // Auto compression
        { format: "webp" }, // Convert to modern Format
        { width: "1280" }, // Width resizing
      ],
    });

    const image = optimizedImageURL;

    // Save blog to database
    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });

    res.json({
      success: true,
      message: "Blog added successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Get all published blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get blog details by ID
export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      res.json({ success: false, message: "Blog not found" });
    }
    res.json({ success: true, blog });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Delete a blog and its comments
export const deleteBlogById = async (req, res) => {
  try {
    // Delete blog by ID
    const { id } = req.body;
    await Blog.findByIdAndDelete(id);

    // Delete all comments linked to this blog

    await Comment.deleteMany({ blog: id });

    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Toggle publish/unpublish blog
export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);
     // Toggle the isPublished value
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.json({ success: true, message: "Blog Status updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Add a comment to a blog (needs admin approval)
export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body;
  
  // Create a new comment
    await Comment.create({ blog, name, content });

    res.json({ success: true, message: "Comment added for review" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get approved comments for a specific blog
export const getBlogComment = async (req, res) => {
  try {
    const { blogId } = req.body;
  // Find approved comments for the blog
    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    }).sort({ createdAt: -1 });
    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Generate blog content using Gemini AI
export const generateContent = async (req,res) => {
  try {
    const { prompt } = req.body;
  // Send prompt to Gemini to generate content
   const content =  await main(
      prompt + "Generate a blog content for this topic in simple text format"
    );
    res.json({success:true,content})
  } catch (error) {
    res.json({success:false,message: error.message})
  }
};
