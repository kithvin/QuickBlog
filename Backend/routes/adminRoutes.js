import express from "express";

import {adminLogin, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard} from "../controllers/adminController.js";

import auth from "../middleware/auth.js";

const adminRoutes = express.Router();

adminRoutes.post("/login", adminLogin);

adminRoutes.get("/comments",auth,getAllComments);

adminRoutes.get("/blogs",auth,getAllBlogsAdmin);

adminRoutes.post("/delete-comment",auth,deleteCommentById);

adminRoutes.post("/approve-comment",auth,approveCommentById);

adminRoutes.get("/dashbord",auth,getDashboard);

export default adminRoutes;