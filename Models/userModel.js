import mongoose from 'mongoose'
import userSchema from '../Schemas/user.js'

const userModel = mongoose.model('User', userSchema);

export default userModel;
