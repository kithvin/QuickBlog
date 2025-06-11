import express from "express";

import {adminLogin} from "../controllers/adminController.js";

const adminRoutes = express.Router();

adminRoutes.post("/login", adminLogin);

export default adminRoutes;