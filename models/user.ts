import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: String,
  image: String,
  emailVerified: Boolean || null,
});

export const UserModel = models.User || model('User', userSchema);