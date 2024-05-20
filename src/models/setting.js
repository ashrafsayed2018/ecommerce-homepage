import mongoose from "mongoose";
const SettingSchema = new mongoose.Schema({
  siteName: String,
  logoUrl: String,
});

const Setting =
  mongoose.models.Setting || mongoose.model("Setting", SettingSchema);

export default Setting;
