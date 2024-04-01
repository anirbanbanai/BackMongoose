import { Types } from "mongoose"

export type TsaleHistory = {
    ProductId: Types.ObjectId, 
    quantity: number,
    buyerNaame: string,
    dateOfSale: Date
}