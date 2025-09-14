import mongoose from "mongoose";

const ratingSchema = new mongoose.Schema(
  {
    complaint: { type: mongoose.Schema.Types.ObjectId, ref: "Complaint", required: true },
    staff: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    citizen: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    feedback: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Rating", ratingSchema, "ratings");
