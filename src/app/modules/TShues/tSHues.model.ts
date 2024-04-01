import { Schema, model } from "mongoose";
import { TshoesInterface } from "./tShues.interface";
import { number } from "zod";

const shoesSchema = new Schema<TshoesInterface>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  style: { type: String, required: true },
  size: { type: String, required: true },
  color: { type: String, required: true },
  releaseDate: { type: String, required: true },
  role: {
    type: String,
    enum: ["sell", "nosell"]
  },
  quantity: { type: Number, required: true },
});

export const ShoesModel = model<TshoesInterface>("tshoe", shoesSchema);
