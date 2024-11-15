import mongoose from "mongoose";

const updateSchema = new mongoose.Schema({
  youtubeLink: { type: String, default: "" },
  phoneNumber: { type: String, default: "" },
});

const Update = mongoose.model("Update", updateSchema);
export default Update;
