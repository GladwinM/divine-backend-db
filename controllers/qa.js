import QA from "../models/qaSchema.js";
import { parseExcel } from "../utils/excelHandler.js";

export const uploadExcel = async (req, res) => {
  console.log("uploadExcel");
  try {
    const excelData = await parseExcel(req.file.path); // Use await
    const qa = new QA({ excelData });
    await qa.save();
    res.status(201).json(qa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllQA = async (req, res) => {
  try {
    // Find all Q&A documents in the database
    const qaData = await QA.find();

    // Return the data in the response
    res.status(200).json(qaData);
  } catch (error) {
    // Handle errors (e.g., if the database query fails)
    res.status(500).json({ error: error.message });
  }
};

export const addQuestion = async (req, res) => {
  try {
    const qa = await QA.findById(req.params.id);
    if (!qa) return res.status(404).json({ error: "Q&A not found" });

    qa.questions.push(req.body);
    await qa.save();

    res.status(201).json(qa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
