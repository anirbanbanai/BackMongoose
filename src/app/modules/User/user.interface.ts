/* eslint-disable no-unused-vars */
import { Model } from 'mongoose'

export interface IPasswordHistory {
    password: string;
    time: Date;
  }

export interface userInterface {
  _id: string
  username: string
  email: string
  password: string
  role: 'buyer' | "seller",
  passwordChangeAt?: Date;
  passwordChangeHistory?: [IPasswordHistory],
  createdAt: string,
  updatedAt: string
}

export const USER_ROLE ={
  buyer: "buyer",
  seller: "seller"
} as const;



export interface UserModel extends Model<userInterface> {
  isUserExistByName(id:string):Promise<userInterface>,
  isPasswordMatched(plantextPass: string, hashtagPass: string): Promise<boolean>
}

export type UserRole = keyof typeof USER_ROLE;
