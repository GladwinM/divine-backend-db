import Update from "../models/Update.js";

// Get all updates
export const getUpdates = async (req, res) => {
  try {
    const updates = await Update.find();
    res.json(updates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create or update YouTube link
export const createOrUpdateYouTubeLink = async (req, res) => {
  const { youtubeLink } = req.body;
  try {
    const update = await Update.findOneAndUpdate(
      {},
      { youtubeLink },
      { upsert: true, new: true }
    );
    res.json(update);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create or update phone number
export const createOrUpdatePhoneNumber = async (req, res) => {
  const { phoneNumber } = req.body;
  try {
    const update = await Update.findOneAndUpdate(
      {},
      { phoneNumber },
      { upsert: true, new: true }
    );
    res.json(update);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an update
export const deleteUpdate = async (req, res) => {
  try {
    const update = await Update.findByIdAndDelete(req.params.id);
    if (!update) {
      return res.status(404).json({ message: "Update not found" });
    }
    res.json({ message: "Update deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
