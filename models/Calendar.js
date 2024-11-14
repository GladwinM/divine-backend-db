// divine-backend/models/Calendar.js
import mongoose from "mongoose";

const calendarSchema = new mongoose.Schema({
  originalName: { type: String, required: true },
  calendarId: { type: String, required: true },
  displayName: { type: String, required: true },
  status: { type: Boolean, default: true }, // Active or inactive status
  createdAt: { type: Date, default: Date.now },
});

const Calendar = mongoose.model("Calendar", calendarSchema);
export default Calendar;
