import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Ensuring each banner has a name
  },
  image: {
    type: String,
    required: true, // Storing the path to the image file
  },
  type: {
    type: String,
    required: true,
    enum: ["Hero", "Features"], // Restricting the type to either 'Hero' or 'Features'
  },
  active: {
    type: Boolean,
    default: true, // Banners are active by default, can be toggled off
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the date when a banner is created
  },
});

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner;
