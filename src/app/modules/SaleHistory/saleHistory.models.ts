import { Schema, model } from "mongoose";
import { TsaleHistory } from "./saleHisoty.interface";

const saleHistorySchema = new Schema<TsaleHistory>({
    ProductId: {
        type: Schema.Types.ObjectId,
        ref: 'tshoes',
        required: true,
      },
  quantity:  { type: Number, required: true },
  buyerNaame: { type: String, required: true },
  dateOfSale: { type: Date, required: true },
},
{
    timestamps: true
});

export const SaleHistoryModel = model<TsaleHistory>("tsalehistory", saleHistorySchema);

