import express from "express";
import {
  createOrUpdateYouTubeLink,
  createOrUpdatePhoneNumber,
  getUpdates,
  deleteUpdate,
} from "../controllers/updateController.js";

const router = express.Router();

// Route to get all updates
router.get("/", getUpdates);

// Route to add or update a YouTube link
router.post("/youtubeLink", createOrUpdateYouTubeLink);

// Route to add or update a phone number
router.post("/phone", createOrUpdatePhoneNumber);

// Route to delete an update
router.delete("/:id", deleteUpdate);

export default router;
