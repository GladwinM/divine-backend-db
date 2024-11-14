import express from "express";
import {
  createNotification,
  deleteNotification,
  getNotifications,
  updateNotification,
} from "../controllers/notifcation.js";

const router = express.Router();

router.post("/", createNotification);
// Add other routes as needed
router.get("/", getNotifications);
router.put("/:id", updateNotification);
router.delete("/:id", deleteNotification );

export default router;
