import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import  secureRoute from "../models/middleware/secureRoute.js"
import Message from "../models/message.js";
const router = express.Router();

router.post("/send/id",secureRoute, sendMessage);
router.get("/:id",secureRoute, getMessages);


export default router;
