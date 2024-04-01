
import mongoose from 'mongoose'
import {  TGenericErrorRes } from '../interface/error'

const handleCastError = (err: mongoose.Error.CastError): TGenericErrorRes => {
  const Message = err.value;
    const errorMessage =  `${Message} is not a valid Id`;

  const statusCode = 400
  return {
    statusCode,
    message: 'Invald Id',
    errorMessage,
  }
}

export default handleCastError
