import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
    link: { type: String }, // link to the complaint this noti refers to
  },
  { timestamps: true }
);

export default mongoose.model("Notification", notificationSchema, "notifications");
