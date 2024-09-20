import express from 'express';
import { sendMessage, getMessages, deleteMessages } from '../controllers/messageController.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.get("/delete/:id", protectRoute, deleteMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
