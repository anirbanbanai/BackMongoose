import { Schema, model } from "mongoose";
import { SaleInterface } from "./sales.interface";

const SaleSchema = new Schema<SaleInterface>({
  quantity: { type: Number },
  buyerName: {type: String},
  saleDate: {type: String}
});

export const SaleModels = model<SaleInterface>("sale", SaleSchema)