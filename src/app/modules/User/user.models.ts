import { Schema, model } from 'mongoose'
import { IPasswordHistory, UserModel, userInterface } from './user.interface'
import bcrypt from 'bcrypt'


const userSchema = new Schema<userInterface>(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['buyer', 'seller'],
      required: true,
    },
    createdAt: String,
    updatedAt: String,
  },
  {
    timestamps: true,
  },
)

userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword
    next()
  } catch (error) {
    throw new Error(error as string)
  }
})

userSchema.methods.comparePassword = async function (
  enteredPassword: string,
): Promise<boolean> {
  try {
    return await bcrypt.compare(enteredPassword, this.password)
  } catch (error) {
    return false
  }
}


userSchema.statics.isUserExistByName = async function (username: string) {
  return await userModel.findOne({ username })
}


userSchema.statics.isPasswordMatched = async function (pl, hs) {
  return await bcrypt.compare(pl, hs)
}

export const userModel = model<userInterface, UserModel>('user', userSchema)


