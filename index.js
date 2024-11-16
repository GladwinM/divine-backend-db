import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import qaRoutes from "./routes/qaRoutes.js";
import calendarRoutes from "./routes/calendarRoutes.js";
import bannerRoutes from "./routes/bannerRoutes.js";
import cors from "cors";
import updateRoutes from "./routes/updateRoutes.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

// const URI =
//   "mongodb+srv://abdScratch:SGYlD329TfboNANM@cluster0.ctsco.mongodb.net/divine?retryWrites=true&w=majority";

// const URI = "mongodb://localhost:27017/divine";
const URI =
  "mongodb+srv://gladwinjeuish:gladwinjeuish@cluster0.rxygt.mongodb.net/divine";
// Connect to MongoDB
mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

  
app.use("/api/users", userRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/qas", qaRoutes);
app.use("/api/calendars", calendarRoutes);
app.use("/api/banners", bannerRoutes);
app.use("/api/updates", updateRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
