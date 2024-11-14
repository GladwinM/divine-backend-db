import express from "express";
import Calendar from "../models/Calendar.js"; // Ensure this path is correct and file name is 'Calendar.js'

const router = express.Router();

// Get All Calendars
router.get("/", async (req, res) => {
  try {
    const calendars = await Calendar.find();
    res.status(200).json(calendars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create New Calendar
router.post("/", async (req, res) => {
  const { originalName, calendarId, displayName, status } = req.body;
  const newCalendar = new Calendar({
    originalName,
    calendarId,
    displayName,
    status,
  });

  try {
    const savedCalendar = await newCalendar.save();
    res.status(201).json(savedCalendar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update Calendar status
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const updatedCalendar = await Calendar.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedCalendar) {
      return res.status(404).json({ message: "Calendar not found" });
    }

    res.json(updatedCalendar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Calendar details
router.patch("/:id/update", async (req, res) => {
  const { id } = req.params;
  const { originalName, calendarId, displayName } = req.body;

  try {
    const updatedCalendar = await Calendar.findByIdAndUpdate(
      id,
      { originalName, calendarId, displayName },
      { new: true }
    );

    if (!updatedCalendar) {
      return res.status(404).json({ message: "Calendar not found" });
    }

    res.json(updatedCalendar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Calendar
router.delete("/:id", async (req, res) => {
  try {
    const deletedCalendar = await Calendar.findByIdAndDelete(req.params.id);
    if (!deletedCalendar) {
      return res.status(404).json({ message: "Calendar not found" });
    }
    res.status(200).json({ message: "Calendar deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//done
export default router;
