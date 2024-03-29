import { Schema, model, models } from "mongoose";

const dietSchema = new Schema({
  day: String,
  dayId: Number,
  shortDescription: String,
  fullDescription: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export interface Diet {
  day: string;
  dayId: number;
  shortDescription: string;
  fullDescription: string;
  user: { type: Schema.Types.ObjectId | string, ref: 'User' | string },
}

export const DietModel = models.Diet || model("Diet", dietSchema);
