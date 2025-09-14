import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },

    citizen: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    staff: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },

    photo: { type: String }, // URL
    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },

    severity: { type: String, enum: ["low", "medium", "high"], default: "low" },
    status: {
      type: String,
      enum: ["reported", "inprogress", "completed", "closed", "reopened"],
      default: "reported",
    },

    updates: [
      {
        status: { type: String },
        message: { type: String },
        updatedAt: { type: Date, default: Date.now },
      },
    ],

    upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    citizenRating: { type: Number, min: 1, max: 5 },
  },
  { timestamps: true }
);

export default mongoose.model("Complaint", complaintSchema, "complaints");
