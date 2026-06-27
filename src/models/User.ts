import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["DONOR", "NGO", "ADMIN"],
      default: "DONOR",
    },

    ngoVerified: {
      type: Boolean,
      default: false,
    },

    avatar: String,
  },
  {
    timestamps: true,
  }
);

export default models.User || model("User", UserSchema);