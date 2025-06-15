import express from "express";

import {
  adminLogin,
  approveCommentById,
  deleteCommentById,
  getAllBlogsAdmin,
  getAllComments,
  getDashboard,
} from "../controllers/adminController.js";

import auth from "../middleware/auth.js";

const adminRoutes = express.Router();

adminRoutes.post("/login", adminLogin); // Admin login (no auth needed)

adminRoutes.get("/comments", auth, getAllComments); // Get all comments (protected route)

adminRoutes.get("/blogs", auth, getAllBlogsAdmin); // Get all blogs for admin (protected route)

adminRoutes.post("/delete-comment", auth, deleteCommentById); // Delete a comment by ID (protected route)

adminRoutes.post("/approve-comment", auth, approveCommentById); // Approve a comment by ID (protected route)

adminRoutes.get("/dashbord", auth, getDashboard); // Get dashboard data (protected route)

export default adminRoutes;
