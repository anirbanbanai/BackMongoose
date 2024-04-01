import { Schema, model } from "mongoose";
import { shoesInterface } from "./shoe.interface";

const shoesSchema = new Schema<shoesInterface>({
    name: { type: String, required: true },
    price: { type: Number,  required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    style: { type: String, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    releaseDate: { type: String, required: true },
    role: {
        type: String,
        enum: ['sell', 'nosell'],
        required: true
      },
})

export const ShoesModel = model<shoesInterface>('shoe', shoesSchema) 