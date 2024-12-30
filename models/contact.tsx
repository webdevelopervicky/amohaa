import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String },  // No validation
  email: { type: String }, // No validation
  number: { type: String }, // No validation
  subject: { type: String }, // No validation
  message: { type: String }, // No validation
});

const User = mongoose.models.User || mongoose.model("contact", UserSchema);
export default User;
