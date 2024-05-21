import express from "express";
import secureRoute from "../middleware/secureRoute.js";
import { getUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", secureRoute, getUsers);

export default router;