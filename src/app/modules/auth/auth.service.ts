/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../../config'
import { userModel } from '../User/user.models'
// import { TLoginUser } from './auth.interface'
import jwt, { JwtPayload } from 'jsonwebtoken'
// import bcrypt from 'bcrypt'
// import { format } from 'date-fns'
// import { IPasswordHistory } from '../User/user.interface'

const loginUser = async (payload: JwtPayload) => {
  const user = await userModel.isUserExistByName(payload?.username)
  if (!(await userModel.isUserExistByName(payload?.username))) {
    throw new Error('Username is not matched')
  }
  if (!(await userModel.isPasswordMatched(payload?.password, user?.password))) {
    throw new Error('password is not matched')
  }
  const jwtPayload = {
    id: (user as any)._id,
    username: user.username,
    email: user.email,
    role: user.role,
  }

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '10d',
  })
  const { _id, username, email, role } = user
  const withoutPassResult = { _id, username, email, role }

  return {
    user: withoutPassResult,
    token: accessToken,
  }
}


export const AuthService = {
  loginUser
}
