import express from "express";
import multer from "multer";
import Banner from "../models/Banner.js"; // Ensure path is correct

const router = express.Router();

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Get All Banners
router.get("/", async (req, res) => {
  try {
    const banners = await Banner.find();
    res.status(200).json(banners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create New Banner
router.post("/", async (req, res) => {
  const { name, type } = req.body;
  // const file = req.file;

console.log(req.body);
  const newBanner = new Banner({...req.body });

  try {
    const savedBanner = await newBanner.save();
    res.status(201).json(savedBanner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a Banner
router.put("/:id", upload.single("file"), async (req, res) => {
  const { name, type, active } = req.body;
  const file = req.file;
  let update = {
    name,
    type,
    active,
  };

  // If new image is uploaded, update image path
  if (file) {
    update.image = file.path;
  }

  try {
    const updatedBanner = await Banner.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true }
    );

    if (!updatedBanner) {
      return res.status(404).json({ message: "Banner not found." });
    }
    res.status(200).json(updatedBanner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a Banner
router.delete("/:id", async (req, res) => {
  try {
    const banner = await Banner.findByIdAndDelete(req.params.id);
    if (!banner) {
      return res.status(404).json({ message: "Banner not found." });
    }
    res.status(200).json({ message: "Banner deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
