import express from "express";
import multer from "multer";
import { uploadExcel, addQuestion, getAllQA } from "../controllers/qa.js";
import path from "path";

const router = express.Router();

// Set storage destination and filename
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads"); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Initialize multer
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit: 5MB
});

// const upload = multer({ dest: "uploads/" });
router.get("/",getAllQA)
router.post("/upload-excel", upload.single("file"), uploadExcel);
router.post("/:id/question", addQuestion);

export default router;
